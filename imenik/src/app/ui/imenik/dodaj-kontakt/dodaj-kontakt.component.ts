import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { KontaktiService } from 'src/app/services/kontakti.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-dodaj-kontakt',
  templateUrl: './dodaj-kontakt.component.html',
  styleUrls: ['./dodaj-kontakt.component.scss']
})
export class DodajKontaktComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  dataSource: MatTableDataSource<any>;
  id: number;


  constructor(private kontaktiService: KontaktiService, private _formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {

    this.firstFormGroup = this._formBuilder.group({

      ime: new FormControl('', [Validators.required]),
      prezime: new FormControl('', [Validators.required]),
      telefonskiBroj: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      opis: new FormControl('', [Validators.required])
    });

  }


  OnInit(): void {
    this.dataSource = new MatTableDataSource(this.kontaktiService.getKontakti());
  }

  Spremi = function () {

    let kontakti = {
      "Id": this.id,
      "Ime": this.ime.value,
      "Prezime": this.prezime.value,
      "Telefon": this.telefonskiBroj.value,
      "Email": this.email.value,
      "Opis": this.opis.value
      
    };

 

    let First = this.firstFormGroup.value;
    this.kontaktiService.addKontakt(kontakti);

    this.router.navigate(['/popis']);
  }

  // Getters


  
  get ime(){
    return this.firstFormGroup.get('ime');
  }

  get prezime(){
    return this.firstFormGroup.get('prezime');
  }

  get telefonskiBroj(){
    return this.firstFormGroup.get('telefonskiBroj');
  }


  get opis(){
    return this.firstFormGroup.get('opis');
  }

  get email(){
    return this.firstFormGroup.get('email');
  }

  
}
