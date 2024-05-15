import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-shipping',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shipping.component.html',
  styleUrl: './shipping.component.css'
})
export class ShippingComponent implements OnInit {
  constructor(private cartService: CartService){ }

  shippingCosts!: Observable<{ type: string, price: number }[]>
  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrices()
  }

}
