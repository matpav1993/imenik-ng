import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { KontaktiService } from 'src/app/services/kontakti.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { Kontakt } from 'src/app/models/kontakt';
import { KontaktInterface } from 'src/app/models/kontakt-interface';

@Component({
  selector: 'app-dodaj-kontakt',
  templateUrl: './dodaj-kontakt.component.html',
  styleUrls: ['./dodaj-kontakt.component.scss']
})
export class DodajKontaktComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  dataSource: MatTableDataSource<KontaktInterface>;
  id: number;


  constructor(private kontaktiService: KontaktiService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {

    this.firstFormGroup = this.formBuilder.group({

      ime: new FormControl('', [Validators.required]),
      prezime: new FormControl('', [Validators.required]),
      telefonskiBroj: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      opis: new FormControl('', []),
    });

  }


  OnInit(): void {
    this.dataSource = new MatTableDataSource(this.kontaktiService.getKontakti());
  }

  btnSpremi(): void {

    const kontakt = new Kontakt(
      this.id,
      this.ime.value,
      this.prezime.value,
      this.telefonskiBroj.value,
      this.email.value,
      this.opis.value);


    this.kontaktiService.addKontakt(kontakt);

    this.router.navigate(['/popis']);
  }

  // Getters

  get ime(): AbstractControl {
    return this.firstFormGroup.get('ime');
  }

  get prezime(): AbstractControl {
    return this.firstFormGroup.get('prezime');
  }

  get telefonskiBroj(): AbstractControl {
    return this.firstFormGroup.get('telefonskiBroj');
  }


  get opis(): AbstractControl {
    return this.firstFormGroup.get('opis');
  }

  get email(): AbstractControl {
    return this.firstFormGroup.get('email');
  }
}
