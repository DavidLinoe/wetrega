import { Component, signal } from '@angular/core';
import { NavigationComponent } from "./layout/navigation/containers/navigation.container.component";

@Component({
  selector: 'app-root',
  imports: [NavigationComponent],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('WeTrega');
}
