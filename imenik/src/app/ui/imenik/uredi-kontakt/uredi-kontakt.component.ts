import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { KontaktiService } from 'src/app/services/kontakti.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-uredi-kontakt',
  templateUrl: './uredi-kontakt.component.html',
  styleUrls: ['./uredi-kontakt.component.scss']
})
export class UrediKontaktComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  dataSource: MatTableDataSource<any>;

  id: number;

  constructor(
    private kontaktiService: KontaktiService,
    private _formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.firstFormGroup = this._formBuilder.group({

      ime: new FormControl('', [Validators.required]),
      prezime: new FormControl('', [Validators.required]),
      telefonskiBroj: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      opis: new FormControl('', [Validators.required])

    });

    this.route.paramMap.subscribe(params => {
      if (params.get('id') != null) {
        let id = +params.get('id');
        this.id = id;

        var kontakt = this.kontaktiService.getKontakt(id);
        
        // this.firstFormGroup.setValue(kontakt);
        this.ime.setValue(kontakt.Ime);
        this.prezime.setValue(kontakt.Prezime);
        this.telefonskiBroj.setValue(kontakt.Telefon);
        this.email.setValue(kontakt.Email);
        this.opis.setValue(kontakt.Opis);

      }
    });

    


  }



  OnInit(): void {
    this.dataSource = new MatTableDataSource(this.kontaktiService.getKontakti());

  }

  Spremi = function () {

    let kontakt = {
      "Id": this.id,
      "Ime": this.ime.value,
      "Prezime": this.prezime.value,
      "Telefon": this.telefonskiBroj.value,
      "Email": this.email.value,
      "Opis": this.opis.value
    };

    this.kontaktiService.updateKontakt(kontakt);
    this.router.navigate(['/popis']);
  }

  // Getters
  get ime() {
    return this.firstFormGroup.get('ime');
  }

  get prezime() {
    return this.firstFormGroup.get('prezime');
  }

  get telefonskiBroj() {
    return this.firstFormGroup.get('telefonskiBroj');
  }

  get opis() {
    return this.firstFormGroup.get('opis');
  }

  get email() {
    return this.firstFormGroup.get('email');
  }


}
