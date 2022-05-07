import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Bejelentes } from '../../shared/bejelentes';
import { BejelentesService } from '../../shared/services/bejelentes.service';

@Component({
  selector: 'app-bejelentesek',
  templateUrl: './bejelentesek.component.html',
  styleUrls: ['./bejelentesek.component.scss']
})
export class BejelentesekComponent implements OnInit {

  dataSource: MatTableDataSource<Bejelentes>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  Data: Bejelentes[] = [];
  displayedColumns: any[] = [
    'nev',
    'tipus',
    'datum',
    'prioritas',
    'action'
  ];


  constructor(private api: BejelentesService) {
    // for (let index = 0; index < 10; index++) {
    //   const element: Bejelentes = {
    //     nev: 'Test' + index,
    //     datum: new Date(),
    //     leiras: 'Ez egy test (' + index + ')',
    //     prioritas: 'Surgos',
    //     tipus: 'Telefon'
    //   } 
    //   this.api.addBejelentes(element);
    // }
    this.api
      .getBejelentesek()
      .snapshotChanges()
      .subscribe( bejelentesek => {
        this.Data = [];
        bejelentesek.forEach( jelentes => {
          let a = jelentes.payload.toJSON();
          const b = a as Bejelentes;
          b.$key= jelentes.key ? jelentes.key : "";
          this.Data.push(b);
        });
        this.dataSource = new MatTableDataSource(this.Data);
        /* Pagination */
        setTimeout(() => {
          this.dataSource.paginator = this.paginator;
        }, 0);
      })
   }

   deleteBejelentes(index: number, e: Bejelentes) {
    if (window.confirm('Biztosan törölni szeretné a bejelentést?')) {
      if (e.$key) {
        this.api.deleteBejelentes(e.$key);
      }
    }
  }

  ngOnInit(): void {
  }

}
