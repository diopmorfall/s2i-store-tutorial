import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartService } from '../../services/cart-service.service';
import { Product } from '../../products';

@Component({
    selector: 'app-cart',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './cart.component.html',
    styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
    constructor(private cartService: CartService){ }
    items: Product[] = [];
    
    ngOnInit(): void {
        this.items = this.cartService.getItems()
    }
}
