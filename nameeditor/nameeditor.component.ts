import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {FormControl} from '@angular/forms'

@Component({
  selector: 'app-nameeditor',
  templateUrl: './nameeditor.component.html',
  styleUrls: ['./nameeditor.component.css']
})
export class NameeditorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 name=new FormControl('Sreeraj')
 email=new FormControl('sreeraj00077@gmail.com')
 password=new FormControl('abcde')
 mobno=new FormControl('9756697835')
 
 
 

 save(){
   
  console.log(this.name.value)
  console.log(this.email.value)
  console.log(this.password.value)
  console.log(this.mobno.value)

 }
}
