import { Route } from '@angular/router';

export const navigationRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('../../../pages/home/containers/home.container.component').then(
        (m) => m.HomeComponent,
      ),
  },
  {
    path: 'explore',
    loadComponent: () =>
      import('../../../pages/explore/containers/explore.container.component').then(
        (m) => m.ExploreComponent,
      ),
  },
  {
    path: 'orders',
    loadComponent: () =>
      import('../../../pages/orders/containers/orders.container.component').then(
        (m) => m.OrdersComponent,
      ),
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('../../../pages/profile/containers/profile.container.component').then(
        (m) => m.ProfileComponent,
      ),
  },
];
