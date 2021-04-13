import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { KontaktInterface } from 'src/app/models/kontakt-interface';
import { KontaktiService } from 'src/app/services/kontakti.service';

@Component({
  selector: 'app-dialog-brisanje',
  templateUrl: './dialog-brisanje.component.html',
  styleUrls: ['./dialog-brisanje.component.scss']
})
export class DialogBrisanjeComponent implements OnInit {

  dataSource: MatTableDataSource<KontaktInterface>;
  // @ViewChild('app') app: any;
  renderer2: any;



  constructor(
    private kontaktiService: KontaktiService,
    public dialogRef: MatDialogRef<DialogBrisanjeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    overlayContainer: OverlayContainer
  ) {
    // overlayContainer.getContainerElement().classList.add('custom-theme');
  }

    // themeChange(): void {
    //   const classList = this.app.nativeElement.classList;
    //   const hasClass = classList.contains('custom-theme');
    //   if (hasClass) {
    //     classList.remove('custom-theme');
    //   }
    //   else {
    //     classList.add('custom-theme');
    //   }
  // }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.kontaktiService.getKontakti());
  }

}
