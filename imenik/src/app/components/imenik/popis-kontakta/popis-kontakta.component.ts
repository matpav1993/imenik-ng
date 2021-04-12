import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { KontaktiService } from 'src/app/services/kontakti.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogBrisanjeComponent } from '../../shared/dialogs/dialog-brisanje/dialog-brisanje.component';

@Component({
  selector: 'app-popis-kontakta',
  templateUrl: './popis-kontakta.component.html',
  styleUrls: ['./popis-kontakta.component.scss']
})
export class PopisKontaktaComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['ini', 'Ime', 'Prezime', 'actions'];
  dataSource: MatTableDataSource<any>;

  constructor(private kontaktiService: KontaktiService, private router: Router, public dialog: MatDialog) { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.kontaktiService.getKontakti());
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }

  }

  btnClick(): void {
    this.router.navigate(['/dodaj']);
  }

  btnDetalji(idKontakta: number): void {
    this.router.navigate(['/detalji/' + idKontakta]);
  }

  btnUredi(idKontakta: number): void {
    this.router.navigate(['/uredi/' + idKontakta]);
  }

  btnBrisanje(idKontakta: number, ime: string, prezime: string): void {
    const dialogRef = this.dialog.open(DialogBrisanjeComponent, {
      data: { title: 'Jeste li sigurni da želite obrisati ovaj kontakt?', imePrezime: ime + ' ' + prezime }
    });

    // tslint:disable-next-line: deprecation
    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        this.kontaktiService.deleteKontakt(idKontakta);
        this.dataSource = new MatTableDataSource(this.kontaktiService.getKontakti());
      }
    });
  }
}





