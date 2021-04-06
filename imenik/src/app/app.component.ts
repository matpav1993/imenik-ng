import { Component, HostBinding, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'imenik';
  @ViewChild('app', { static: true }) app;
}
