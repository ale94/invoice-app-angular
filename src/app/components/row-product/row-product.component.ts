import { Component, Input } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'tr[row-product]',
  standalone: true,
  imports: [],
  templateUrl: './row-product.component.html',
})
export class RowProductComponent {
  @Input() item!: Item;
}
