import { Component, OnInit, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ExploreFacade } from '../facades/explore.facade';
import { ExploreViewComponent } from '../components/explore.component';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.container.component.html',
  imports: [AsyncPipe, ExploreViewComponent],
})
export class ExploreComponent implements OnInit {
  private readonly facade = inject(ExploreFacade);
  protected readonly data$ = this.facade.data$;

  ngOnInit(): void {
    this.facade.load();
  }
}
