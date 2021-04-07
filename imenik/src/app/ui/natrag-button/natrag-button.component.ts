import { Component} from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-natrag-button',
  templateUrl: './natrag-button.component.html',
  styleUrls: ['./natrag-button.component.scss']
})
export class NatragButtonComponent{
  constructor(private location: Location) { }

  btnBackClicked(): void {
    this.location.back();
  }

}
