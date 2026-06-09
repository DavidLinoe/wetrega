import { Component, input } from '@angular/core';
import { ExploreData } from '../models/explore.model';

@Component({
  selector: 'app-explore-view',
  templateUrl: './explore.component.html',
})
export class ExploreViewComponent {
  readonly data = input.required<ExploreData>();
}
