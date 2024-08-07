import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from '../../models/invoice';
import { InvoiceViewComponent } from '../invoice-view/invoice-view.component';
import { ClientViewComponent } from '../client-view/client-view.component';
import { CompanyViewComponent } from '../company-view/company-view.component';
import { ListProductsComponent } from '../list-products/list-products.component';
import { RowProductComponent } from '../row-product/row-product.component';
import { TotalComponent } from '../total/total.component';
import { FormProductComponent } from '../form-product/form-product.component';
import { Item } from '../../models/item';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [
    InvoiceViewComponent,
    ClientViewComponent,
    CompanyViewComponent,
    ListProductsComponent,
    RowProductComponent,
    TotalComponent,
    FormProductComponent,
  ],
  templateUrl: './invoice.component.html',
})
export class InvoiceComponent implements OnInit {
  invoice!: Invoice;

  constructor(private service: InvoiceService) {}

  ngOnInit() {
    this.invoice = this.service.getInvoice();
  }

  addItem(item: Item) {
    this.invoice = this.service.save(item);
  }

  deleteItem(id: number) {
    this.invoice = this.service.delete(id);
  }
}
