import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  todo:any[]=[]
  to:any[]=[]
  task:string=''
  s:any
  
  addtask(event:any){
    this.task=(event.target as HTMLInputElement).value
    }
  add(){
    this.todo.push(this.task)
    console.log( this.todo);
  }
  removearr(a:any){
    this.s=this.todo.indexOf(a)
    this.todo.splice(this.s,1)
    console.log(this.todo)
  }
  movearr( a:any){
    this.to.push(a)
    this.removearr(a)
  }
  del(a:any){
    this.s=this.to.indexOf(a)
    this.to.splice(this.s,1)
    console.log(this.to)
  
  }
  clear()
  {
    this.task=""
      
    }

  
}



