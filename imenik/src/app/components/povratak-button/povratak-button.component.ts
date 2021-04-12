import { Component} from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-povratak-button',
  templateUrl: './povratak-button.component.html',
  styleUrls: ['./povratak-button.component.scss']
})
export class PovratakButtonComponent{
  constructor(private location: Location) { }

  btnBackClicked(): void {
    this.location.back();
  }

}
