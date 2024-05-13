import { Injectable } from '@angular/core';
import { Product } from '../products';

@Injectable({
    providedIn: 'root'
})
export class CartService {

    items: Product[] = [];

    addToCart(product: Product){
        this.items.push(product)
        console.log("Cart", this.items)
    }

    getItems(){
        console.log("Cart", this.items)
        return this.items
    }

    clearCart(){
        this.items = [];
        return this.items;
    }
}
