import { AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { KontaktiService } from 'src/app/services/kontakti.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
// import { DialogComponent } from '../../dialog/dialog.component';

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

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.kontaktiService.getKontakti());
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

 

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }

}

btnClick= function () {
  this.router.navigate(['/dodaj']);
};

Detalji= function () {
  this.router.navigate(['/detalji']);
};

Uredi= function () {
  this.router.navigate(['/uredi']);
};

showDialog(){
  // const dialogRef = this.dialog.open(DialogComponent, {
  //   width: '450px',
  //   height: '200px'
  // }); 
  // setTimeout(() => {
  //   dialogRef.close();
  // }, 10000);
}

// Obrisi= function (deleteKontakt) {};
// export class TableOverviewExample implements AfterViewInit {
//   displayedColumns: string[] = ['ini', 'ime', 'prezime', 'actions'];
//   dataSource: MatTableDataSource<any>;
  

    // constructor() {
    
    //   const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));
    //   this.dataSource = new MatTableDataSource(users);
    // }
    
}
  
  /** Builds and returns a new User. */
  // function createNewUser(id: number): any {
  //   const ime = ime[Math.round(Math.random() * (Ime.length - 1))] + ' ' +
  //      ime [Math.round(Math.random() * (Ime.length - 1))].charAt(0) + '.';
  
  //   return {
  //     name: name,
  //     progress: Math.round(Math.random() * 100).toString()
  //   };
  // }


  

