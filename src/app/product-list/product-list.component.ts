import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { products } from '../products';
import { ProductAlertsComponent } from '../product-alerts/product-alerts.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductAlertsComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products = [...products];

  share(productName: string) {
    window.alert(`The product ${productName} has been shared!`);
  }
}
