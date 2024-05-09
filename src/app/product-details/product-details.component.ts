import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(private route: ActivatedRoute){ }
  //* ActivatedRoute contains info about the current route

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap; //* we access to the params we have now 
    const productId = Number(routeParams.get('productId'))
    this.product = products.find(product => product.id === productId)
  }
}