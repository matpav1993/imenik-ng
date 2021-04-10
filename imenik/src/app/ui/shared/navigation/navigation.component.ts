import { Component, Input, Renderer2} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent{
  @Input() app;


  constructor(private renderer: Renderer2) { }


  changeThema(): void {
    const hasClass = this.app.classList.contains('custom-theme');
    if (hasClass) {
      this.renderer.removeClass(this.app, 'custom-theme');
    } else {
      this.renderer.addClass(this.app, 'custom-theme');
    }
  }

}

