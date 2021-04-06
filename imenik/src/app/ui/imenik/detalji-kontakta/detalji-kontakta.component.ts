import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { KontaktiService } from 'src/app/services/kontakti.service';

@Component({
  selector: 'app-detalji-kontakta',
  templateUrl: './detalji-kontakta.component.html',
  styleUrls: ['./detalji-kontakta.component.scss']
})
export class DetaljiKontaktaComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  id: number;
  dataSource: MatTableDataSource<any>;
  kontakt: any;

  constructor(
    private kontaktiService: KontaktiService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    // tslint:disable-next-line: deprecation
    this.route.paramMap.subscribe(params => {
      if (params.get('id') != null) {
        const id = +params.get('id');
        this.id = id;

        this.kontakt = this.kontaktiService.getKontakt(id);

      }
    });

  }

  OnInit(): void {
    this.dataSource = new MatTableDataSource(this.kontaktiService.getKontakti());



    this.router.navigate(['/detalji']);


  }

  // Getters
  get ime(): any {
    return this.kontakt.get('ime');
  }

  get prezime(): any {
    return this.kontakt.get('prezime');
  }

  get telefonskiBroj(): any {
    return this.kontakt.get('telefonskiBroj');
  }

  get opis(): any {
    return this.kontakt.get('opis');
  }

  get email(): any {
    return this.kontakt.get('email');
  }


}
