import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { KontaktiService } from 'src/app/services/kontakti.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-dodaj-kontakt',
  templateUrl: './dodaj-kontakt.component.html',
  styleUrls: ['./dodaj-kontakt.component.scss']
})
export class DodajKontaktComponent implements OnInit {

  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  dataSource: MatTableDataSource<any>;


  constructor(private kontaktiService: KontaktiService, private _formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

  }
  OnInit(): void {
    this.dataSource = new MatTableDataSource(this.kontaktiService.getKontakti());
  }

  btnClick= function () {

    this.kontaktiService.

    // let kontakt = {
    //   "Ime": this.firstFormGroup.ime.value,
    //   "Prezime": this.firstFormGroup.prezime.value
    //   .....
    // };

    // console.log(kontakt);

    // let korisniks = this.firstFormGroup.value;
    // this.kontaktiService.addKontakt(kontakt);

    console.log(this.firstFormGroup);
    // this.router.navigate(['/popis']);
  };
}






// btnClick= function () {
//   this.router.navigate(['/dodajnovitelefon']);
// };


 

