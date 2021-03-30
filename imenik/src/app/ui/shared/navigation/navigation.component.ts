import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  
  jeUlogiran: boolean = false;
  toggle = new FormControl(false);
  @HostBinding('class') className = '';

  constructor(private accountService: AccountService, private overlay: OverlayContainer) { }

  ngOnInit(): void {
    //provjeri jeli ulogiran
    this.jeUlogiran = this.accountService.jeUlogiran;
    
    this.toggle.valueChanges.subscribe((darkMode) => {
      const darkClassName = 'darkMode';
      this.className = darkMode ? darkClassName : '';
    });
  
 
}}
