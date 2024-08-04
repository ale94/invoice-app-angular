import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Item } from '../../models/item';

@Component({
  selector: 'form-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-product.component.html',
})
export class FormProductComponent {
  @Output() addItemEventEmitter = new EventEmitter<Item>();

  private counterId = 4;

  item: any = {
    product: '',
    price: '',
    quantity: '',
  };

  onSubmit(itemForm: NgForm) {
    this.addItemEventEmitter.emit({ id: this.counterId, ...this.item });
    this.counterId++;

    this.item = {
      product: '',
      price: '',
      quantity: '',
    };
    itemForm.reset();
    itemForm.resetForm();
  }
}
