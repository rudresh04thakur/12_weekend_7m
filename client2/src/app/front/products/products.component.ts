import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../services/products.service'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  imagePath = "../../../../assets/";
  imagePath_server = "http://localhost:3000/"
  constructor(private _ar:ActivatedRoute,private _r:Router,private _ser: ProductsService) { }
  products;
  ngOnInit() {
    this._ser.getList('all').subscribe((res)=>{
      console.log("product list =>",res);
      this.products = res;
    })
    //console.log("Category ========== ",this._ar.snapshot.params.cat); 

  }

}
