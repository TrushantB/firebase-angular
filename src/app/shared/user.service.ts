import { Injectable } from '@angular/core';
import { User } from './user.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

userFormate:User;
  constructor(public firestore:AngularFirestore) { }
  getUsers() {
   return  this.firestore.collection('user').snapshotChanges();
  }
}
