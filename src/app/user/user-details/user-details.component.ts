import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  list=[]

  constructor(private userService:UserService,public firestore:AngularFirestore) { }

  ngOnInit() {
  this.userService.getUsers().subscribe((response) => {
    console.log(response);
    
    this.list=response.map((item) => {
      return item.payload.doc.data()
    })
    console.log(this.list);
  })
   
  }
  onclick() {
    console.log("okkkk");
    
    this.firestore.collection('user').add({name:'trushant',address:"pune"})
  }

}
