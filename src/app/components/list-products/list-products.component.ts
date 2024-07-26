import { Component, Input } from '@angular/core';
import { Item } from '../../models/item';
import { RowProductComponent } from '../row-product/row-product.component';

@Component({
  selector: 'list-products',
  standalone: true,
  imports: [RowProductComponent],
  templateUrl: './list-products.component.html',
})
export class ListProductsComponent {
  @Input() products: Item[] = [];
}
