import { Component, OnInit, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { HomeFacade } from '../facades/home.facade';
import { HomeViewComponent } from '../components/home.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.container.component.html',
  imports: [AsyncPipe, HomeViewComponent],
})
export class HomeComponent implements OnInit {
  private readonly facade = inject(HomeFacade);
  protected readonly data$ = this.facade.data$;

  ngOnInit(): void {
    this.facade.load();
  }
}
