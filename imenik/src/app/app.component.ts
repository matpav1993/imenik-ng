import { Component, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('app') app;

  title = 'imenik';

  constructor() {
  }

  themeChange(): void {
    const classList = this.app.nativeElement.classList;
    const hasClass = classList.contains('custom-theme');

    if (hasClass) {
      classList.remove('custom-theme');
    }
    else {
      classList.add('custom-theme');
    }
  }
}

