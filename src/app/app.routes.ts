import { Routes } from '@angular/router';
import { navigationRoutes } from './layout/navigation/routing/navigation.routing';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layout/navigation/containers/navigation.container.component').then(
        (m) => m.NavigationComponent,
      ),
    children: navigationRoutes,
  },
];
