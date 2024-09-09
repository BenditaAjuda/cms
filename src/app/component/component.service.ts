import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {

constructor(private db: AngularFireDatabase) { }

  getList(): Observable<any[]> {
    return this.db.list('/pages').valueChanges();
  }

}
