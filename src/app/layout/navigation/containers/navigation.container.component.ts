import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationBarComponent } from '../components/navigation.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.container.component.html',
  imports: [RouterOutlet, NavigationBarComponent],
})
export class NavigationComponent {}
