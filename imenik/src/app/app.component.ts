import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // @ViewChild('app') app: any;

  title = 'imenik';

  constructor() {
  }

  // themeChange(): void {
  //   const classList = this.app.nativeElement.classList;
  //   const hasClass = classList.contains('custom-theme');

  //   if (hasClass) {
  //     classList.remove('custom-theme');
  //   }
  //   else {
  //     classList.add('custom-theme');
  //   }
  // }
}

