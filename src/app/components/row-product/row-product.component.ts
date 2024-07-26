import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'tr[row-product]',
  standalone: true,
  imports: [],
  templateUrl: './row-product.component.html',
})
export class RowProductComponent {
  @Input() item!: Item;
  @Output() deleteEventEmitter: EventEmitter<number> = new EventEmitter();

  onDelete(id: number) {
    this.deleteEventEmitter.emit(id);
  }
}
