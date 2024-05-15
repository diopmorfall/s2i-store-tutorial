import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../../services/cart.service';
import { Product } from '../../products';

@Component({
    selector: 'app-cart',
    standalone: true,
    imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
    templateUrl: './cart.component.html',
    styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
    constructor(
        private cartService: CartService,
        private formBuilder: FormBuilder
    ){ }

    items: Product[] = [];
    checkoutForm = this.formBuilder.group({
        name: '',
        address: ''
    })
    
    ngOnInit(): void {
        this.items = this.cartService.getItems()
    }

    onSubmit(): void{
        this.cartService.clearCart()
        console.warn('Your order has been submitted', this.checkoutForm.value)
        this.checkoutForm.reset()
    }
}
