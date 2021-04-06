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
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.firstFormGroup = this.formBuilder.group({

      ime: new FormControl('', [Validators.required]),
      prezime: new FormControl('', [Validators.required]),
      telefonskiBroj: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      opis: new FormControl('', [Validators.required])

    });

    // tslint:disable-next-line: deprecation
    this.route.paramMap.subscribe(params => {
      if (params.get('id') != null) {
        const id = +params.get('id');
        this.id = id;

        const kontakt = this.kontaktiService.getKontakt(id);

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

  btnSpremi(): void {

    const kontakt = {
      Id: this.id,
      Ime: this.ime.value,
      Prezime: this.prezime.value,
      Telefon: this.telefonskiBroj.value,
      Email: this.email.value,
      Opis: this.opis.value
    };

    this.kontaktiService.updateKontakt(kontakt);
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
