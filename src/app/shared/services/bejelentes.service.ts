import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
import { Bejelentes } from '../bejelentes';

@Injectable({
  providedIn: 'root'
})
export class BejelentesService {

  private bejelentesekPath = '/bejelentesek';

  bejelentesekRef: AngularFireList<Bejelentes>;

  constructor(private db: AngularFireDatabase) { 
    this.bejelentesekRef = db.list(this.bejelentesekPath);
  }

  addBejelentes(bejelentes: Bejelentes) {
    this.bejelentesekRef
      .push(bejelentes)
      .catch(e => this.errorMgmt(e));
  }

  getBejelentesek(): AngularFireList<Bejelentes> {
    return this.bejelentesekRef;
  }

  getBejelentes(id: string): AngularFireObject<Bejelentes> {
    return this.db.object(this.bejelentesekPath + '/' + id);
  }

  updateBejelentes(id: string, bejelentes: Bejelentes) {
    const old = this.getBejelentes(id);
    old.update(bejelentes);
  }

  deleteBejelentes(id: string) {
    const old = this.getBejelentes(id);
    old.remove().catch(e => this.errorMgmt(e));  
  }

  // Error management
  private errorMgmt(error: any) {
    console.log(error);
  }
}
