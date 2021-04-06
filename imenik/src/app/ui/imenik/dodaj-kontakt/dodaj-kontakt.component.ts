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


  constructor(private kontaktiService: KontaktiService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {

    this.firstFormGroup = this.formBuilder.group({

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

  Spremi = function(): void {

    const kontakti = {
      Id: this.id,
      Ime: this.ime.value,
      Prezime: this.prezime.value,
      Telefon: this.telefonskiBroj.value,
      Email: this.email.value,
      Opis: this.opis.value

    };

    this.kontaktiService.addKontakt(kontakti);

    this.router.navigate(['/popis']);
  };

  // Getters



  get ime(): any {
    return this.firstFormGroup.get('ime');
  }

  get prezime(): any {
    return this.firstFormGroup.get('prezime');
  }

  get telefonskiBroj(): any {
    return this.firstFormGroup.get('telefonskiBroj');
  }


  get opis(): any {
    return this.firstFormGroup.get('opis');
  }

  get email(): any {
    return this.firstFormGroup.get('email');
  }


}
