import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'form-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-product.component.html',
})
export class FormProductComponent {
  @Output() addItemEventEmitter = new EventEmitter();

  private counterId = 4;

  item: any = {
    product: '',
    price: '',
    quantity: '',
  };

  onSubmit(): void {
    this.addItemEventEmitter.emit({ id: this.counterId, ...this.item });
    this.counterId++;

    this.item = {
      product: '',
      price: '',
      quantity: '',
    };
  }
}
