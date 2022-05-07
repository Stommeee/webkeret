import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BejelentesService } from '../../shared/services/bejelentes.service';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-add-bejelentes',
  templateUrl: './add-bejelentes.component.html',
  styleUrls: ['./add-bejelentes.component.scss']
})
export class AddBejelentesComponent implements OnInit {

  @ViewChild('autosize') autosize: CdkTextareaAutosize;

  id: string = "";
  title = "Uj bejelentés";
  bForm: FormGroup = this.fb.group({
    nev: ['', [Validators.required]],
    tipus: ['', [Validators.required]],
    leiras: ['', [Validators.required]],
    datum: ['', [Validators.required]],
    prioritas: ['Kevesbe_surgos', [Validators.required]],
    egyeb: ['']
  });

  bejelentesTipus: string[] = [
    'Televizio',
    'Telefon',
    'Mosogep',
    'Szamitogep',
    'Kegkondi',
  ];
  

  constructor(
    private _ngZone: NgZone,
    public fb: FormBuilder, 
    private api: BejelentesService, 
    private router: Router,
    private actRoute: ActivatedRoute
    ) {
      const idParam = this.actRoute.snapshot.paramMap.get('id');
      this.id = idParam ? idParam : "";
      if (this.id) {
        this.title = "Bejelentés módosítása";
        this.api
          .getBejelentes(this.id)
          .valueChanges()
          .subscribe( data => {
            if (data) this.bForm.setValue(data)
          })
      }
      
  }

  ngOnInit(): void {
  }

  public handleError = (controlName: string, errorName: string) => {
    return this.bForm.controls[controlName]?.hasError(errorName);
  };

  formatDate(e: any) {
    var convertDate = new Date(e.target.value).toISOString().substring(0, 10);
    this.bForm.get('datum')?.setValue(convertDate, {
      onlyself: true,
    });
  }

  onSubmit() {
    if (this.bForm.valid) {
      if (this.id) {
        if (window.confirm('Biztosan szeretné feltölteni a módosításokat?')) {
          this.api.updateBejelentes(this.id, this.bForm.value);
          this.router.navigate(['bejelentesek']);
        }
      } else {
        this.api.addBejelentes(this.bForm.value);
        this.router.navigate(['bejelentesek']);
      } 
    }
  }

  onReset() {
    this.bForm.reset({prioritas:'Kevesbe_surgos'});
    Object.keys(this.bForm.controls).forEach((key) => {
      this.bForm.controls[key].setErrors(null);
    });
  }

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1)).subscribe(() => this.autosize.resizeToFitContent(true));
  }

}
