import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-natrag-button',
  templateUrl: './natrag-button.component.html',
  styleUrls: ['./natrag-button.component.scss']
})
export class NatragButtonComponent implements OnInit {
  @Input() mb = true;
  constructor(private location: Location) { }

  ngOnInit(): void {
  }
  backClicked() {
    this.location.back();
  }

}
