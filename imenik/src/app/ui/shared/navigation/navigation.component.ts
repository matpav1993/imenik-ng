import { Component, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Input() app;
  jeUlogiran = false;
  private toggle = false;


  constructor(private accountService: AccountService,
              private renderer: Renderer2) { }

  ngOnInit(): void {

  }

  changeThema() {
    const hasClass = this.app.classList.contains('custom-theme');
    if (hasClass) {
      this.renderer.removeClass(this.app, 'custom-theme');
    } else {
      this.renderer.addClass(this.app, 'custom-theme');
    }
  }

}

