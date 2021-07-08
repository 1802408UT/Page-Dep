import { Component, OnInit } from '@angular/core';
import { products } from 'src/app/products';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})

export class ProductsDetailsComponent implements OnInit {
  
 product: any;
  //x = 0;
  x = this.route.snapshot.params.productId;
    
  constructor(
    private route: ActivatedRoute,
    
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => this.product = products[this.x]);
  }
  
}
