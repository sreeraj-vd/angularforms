import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
 
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 
  constructor() { }
 
  ngOnInit(): void {
  }
 
  model=new Product("","","","",)
  save(){
    console.log("product id",this.model.pid)
    console.log("product name",this.model.pname)
    console.log("product price",this.model.pprice)
    console.log("product description",this.model.pdes)
  }
 
}
