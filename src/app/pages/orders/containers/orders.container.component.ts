import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { OrdersFacade } from '../facades/orders.facade';
import { OrdersViewComponent } from '../components/orders.component';
import { CreateOrderPayload, UpdateOrderStatusPayload } from '../models/orders.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.container.component.html',
  imports: [AsyncPipe, OrdersViewComponent],
})
export class OrdersComponent implements OnInit {
  private readonly facade = inject(OrdersFacade);
  protected readonly data$ = this.facade.data$;

  @ViewChild(OrdersViewComponent) private view?: OrdersViewComponent;

  ngOnInit(): void {
    this.facade.load();
  }

  protected async onCreate(payload: CreateOrderPayload): Promise<void> {
    await this.facade.createOrder(payload);
    this.view?.onCreated();
  }

  protected async onUpdateStatus(payload: UpdateOrderStatusPayload): Promise<void> {
    await this.facade.updateOrderStatus(payload.orderId, payload.status);
  }
}
