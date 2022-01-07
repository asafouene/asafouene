import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  items:any
  firstItem:any

  constructor(private productService:ProductService) {
    this.productService.OnGetProduct().then((data_product)=>{
      this.items=data_product
      this.firstItem=this.items[0]})  
              
  }

  ngOnInit(): void {

  }
  
}
