import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { OrdersApi } from '../apis/orders.api';
import { mapOrdersDtoToData } from '../mappers/orders.mapper';
import { OrdersData } from '../models/orders.model';

@Injectable({ providedIn: 'root' })
export class OrdersFacade {
  private readonly api = inject(OrdersApi);
  private readonly _data$ = new BehaviorSubject<OrdersData | null>(null);
  readonly data$: Observable<OrdersData | null> = this._data$.asObservable();

  async load(): Promise<void> {
    const dto = await this.api.getOrders();
    if (!dto) return;
    this._data$.next(mapOrdersDtoToData(dto));
  }
}
