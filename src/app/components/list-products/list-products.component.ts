import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() deleteEventEmitter: EventEmitter<number> = new EventEmitter();

  onDelete(id: number) {
    this.deleteEventEmitter.emit(id);
  }
}
