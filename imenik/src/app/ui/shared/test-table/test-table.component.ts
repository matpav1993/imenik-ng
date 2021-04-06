import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { KontaktiService } from 'src/app/services/kontakti.service';
import { Router } from '@angular/router';

// const NAMES: string[] = [
//   'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
//   'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
// ];


@Component({
  selector: 'app-test-table',
  templateUrl: './test-table.component.html',
  styleUrls: ['./test-table.component.scss']
})
export class TestTableComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['ini', 'Ime', 'Prezime', 'actions'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private kontaktiService: KontaktiService) {
    // Create 100 users
    // const users = [];

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.kontaktiService.getKontakti());
  }

  // ngOnInit(): void {
  //   this.dataSource = new MatTableDataSource(this.kontaktiService.getKontakti());
  // }

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

  // btnClick= function () {
  //   this.router.navigate(['/dodaj']);
  // };

  // Detalji= function () {
  //   this.router.navigate(['/detalji']);
  // };

  // Uredi= function () {
  //   this.router.navigate(['/uredi']);
  // };
}
