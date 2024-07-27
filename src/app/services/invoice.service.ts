import { Injectable } from '@angular/core';
import { Invoice } from '../models/invoice';
import { invoiceData } from '../data/invoice.data';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  private invoice: Invoice = invoiceData;

  constructor() {}

  getInvoice(): Invoice {
    const total = this.calculateTotal();
    return { ...this.invoice, total };
  }

  delete(id: number): Invoice {
    this.invoice.items = this.invoice.items.filter((item) => item.id != id);
    return this.getInvoice();
  }

  save(item: Item): Invoice {
    this.invoice.items = [...this.invoice.items, item];
    return this.getInvoice();
  }

  calculateTotal() {
    return this.invoice.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }
}
