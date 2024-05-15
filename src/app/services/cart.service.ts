import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private httpClient: HttpClient){ }

  items: Product[] = [];

  addToCart(product: Product): void{
    this.items.push(product)
  }

  getItems(): Product[]{
    return this.items
  }

  clearCart(): Product[]{
    this.items = [];
    return this.items;
  }

  getShippingPrices(): Observable<{ type: string, price: number }[]>{
    return this.httpClient.get<{ type: string, price: number }[]>('/assets/shipping.json')
  }
}
