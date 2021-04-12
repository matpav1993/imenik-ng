import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { DodajKontaktComponent } from './ui/imenik/dodaj-kontakt/dodaj-kontakt.component';
import { PopisKontaktaComponent } from './ui/imenik/popis-kontakta/popis-kontakta.component';
import { UrediKontaktComponent } from './ui/imenik/uredi-kontakt/uredi-kontakt.component';
import { DetaljiKontaktaComponent } from './ui/imenik/detalji-kontakta/detalji-kontakta.component';
import { NavigationComponent } from './ui/shared/navigation/navigation.component';
import { ShortNamePipe } from './short-name.pipe';
import { TestTableComponent } from './ui/shared/test-table/test-table.component';
import { DialogBrisanjeComponent } from './ui/shared/dialogs/dialog-brisanje/dialog-brisanje.component';
import { PovratakButtonComponent } from './ui/povratak-button/povratak-button.component';

@NgModule({
  declarations: [
    AppComponent,
    DodajKontaktComponent,
    PopisKontaktaComponent,
    UrediKontaktComponent,
    DetaljiKontaktaComponent,
    NavigationComponent,
    ShortNamePipe,
    TestTableComponent,
    DialogBrisanjeComponent,
    PovratakButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

