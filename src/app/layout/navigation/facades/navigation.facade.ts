import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NavItem } from '../models/navigation.model';

@Injectable({ providedIn: 'root' })
export class NavigationFacade {
  private readonly _items$ = new BehaviorSubject<NavItem[]>([
    { label: 'Início', icon: '', route: '' },
    { label: 'Buscar', icon: '', route: 'explore' },
    { label: 'Pedidos', icon: '', route: 'orders' },
    { label: 'Perfil', icon: '', route: 'profile' },
  ]);
  readonly items$: Observable<NavItem[]> = this._items$.asObservable();
}
