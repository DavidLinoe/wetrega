import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavigationFacade } from '../facades/navigation.facade';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation.component.html',
  imports: [AsyncPipe, RouterLink, RouterLinkActive],
})
export class NavigationBarComponent {
  protected readonly items$ = inject(NavigationFacade).items$;
}
