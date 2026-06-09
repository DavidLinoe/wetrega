import { Component, input } from '@angular/core';
import { HomeData } from '../models/home.model';

@Component({
  selector: 'app-home-view',
  templateUrl: './home.component.html',
})
export class HomeViewComponent {
  readonly data = input.required<HomeData>();
}
