import { Symptoms } from './interface/symptoms';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SymptomsService {
  private symptomsCollection: AngularFirestoreCollection<Symptoms>;

  constructor(
    private afs: AngularFirestore,
    private storage: AngularFireStorage)
    {
      this.symptomsCollection = this.afs.collection<Symptoms>('symptoms');
    }
  getAll(){
    return this.afs.collection('symptoms')
      .snapshotChanges().pipe(
        map( changes => {
          return changes.map( s =>{
            const id = s.payload.doc.id;
            const data = s.payload.doc.data() as Symptoms
            return { id, ...data };
        })
      })
    )
  }
  getByID(){

  }
  addSymptoms(){

  }
  dleteSymptoms(){

  }
  deleteSymptoms(){

  }
}
