import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-povratak-button',
  templateUrl: './povratak-button.component.html',
  styleUrls: ['./povratak-button.component.scss']
})
export class PovratakButtonComponent{
  constructor(private router: Router) { }

  btnBackClicked(): void {
    this.router.navigate(['/popis']);
  }

}
