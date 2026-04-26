import { Route } from '@angular/router';

export const navigationRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('../../../pages/home/containers/home.container.component').then(
        (m) => m.HomeComponent,
      ),
  },
];
