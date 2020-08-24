import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../service/product-service.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any = [];
  constructor(private productService: ProductServiceService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getAllProducts().subscribe(
      res => {
        console.log(res);
        this.products = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
