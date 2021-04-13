import { Component, EventEmitter, Input, Output, Renderer2} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent{

  @Output() themeChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  changeThema(): void {
      this.themeChange.emit('1');
  }

}

