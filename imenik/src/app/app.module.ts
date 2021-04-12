import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { DodajKontaktComponent } from './components/imenik/dodaj-kontakt/dodaj-kontakt.component';
import { PopisKontaktaComponent } from './components/imenik/popis-kontakta/popis-kontakta.component';
import { UrediKontaktComponent } from './components/imenik/uredi-kontakt/uredi-kontakt.component';
import { DetaljiKontaktaComponent } from './components/imenik/detalji-kontakta/detalji-kontakta.component';
import { NavigationComponent } from './components/shared/navigation/navigation.component';
import { ShortNamePipe } from './components/pipes/short-name.pipe';
import { TestTableComponent } from './components/shared/test-table/test-table.component';
import { DialogBrisanjeComponent } from './components/shared/dialogs/dialog-brisanje/dialog-brisanje.component';
import { PovratakButtonComponent } from './components/povratak-button/povratak-button.component';

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

