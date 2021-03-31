import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { KontaktiService } from 'src/app/services/kontakti.service';

@Component({
  selector: 'app-dialog-brisanje',
  templateUrl: './dialog-brisanje.component.html',
  styleUrls: ['./dialog-brisanje.component.scss']
})
export class DialogBrisanjeComponent implements OnInit {

  dataSource: MatTableDataSource<any>;


  constructor(
    private kontaktiService: KontaktiService,
    private router: Router,
    public dialogRef: MatDialogRef<DialogBrisanjeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    overlayContainer: OverlayContainer
  ) {
    overlayContainer.getContainerElement().classList.add('custom-theme');
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.kontaktiService.getKontakti());
  }

}