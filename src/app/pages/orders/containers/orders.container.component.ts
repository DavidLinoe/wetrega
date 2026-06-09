import { Component, OnInit, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { OrdersFacade } from '../facades/orders.facade';
import { OrdersViewComponent } from '../components/orders.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.container.component.html',
  imports: [AsyncPipe, OrdersViewComponent],
})
export class OrdersComponent implements OnInit {
  private readonly facade = inject(OrdersFacade);
  protected readonly data$ = this.facade.data$;

  ngOnInit(): void {
    this.facade.load();
  }
}
