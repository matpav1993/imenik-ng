import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { KontaktiService } from 'src/app/services/kontakti.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uredi-kontakt',
  templateUrl: './uredi-kontakt.component.html',
  styleUrls: ['./uredi-kontakt.component.scss']
})
export class UrediKontaktComponent implements OnInit {
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private kontaktiService: KontaktiService, private _formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

  }
}
