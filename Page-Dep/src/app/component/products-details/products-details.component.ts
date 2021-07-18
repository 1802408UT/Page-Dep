import { Component, OnInit } from '@angular/core';
import { products } from 'src/app/products';
import { ActivatedRoute, Params } from '@angular/router';
import { CartService } from 'src/app/cart.service';

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
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => this.product = products[this.x]);
    
    console.log(this.product);
  }
  
}
