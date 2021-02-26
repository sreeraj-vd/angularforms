import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { CalculatorComponent } from './calculator/calculator.component';
import{TodoComponent} from './todo/todo.component';
import {AppComponent} from './app.component';

const routes: Routes = [{
  path:"calculator",
  component:CalculatorComponent

},{
  path:"todo",
  component:TodoComponent
},{
  path:"app",
  component:AppComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
