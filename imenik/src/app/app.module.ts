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
import { HomeComponent } from './ui/imenik/home/home.component';
import { NavigationComponent } from './ui/shared/navigation/navigation.component';
import { ShortNamePipe } from './short-name.pipe';
import { TestTableComponent } from './ui/shared/test-table/test-table.component';
import { DialogBrisanjeComponent } from './ui/shared/dialogs/dialog-brisanje/dialog-brisanje.component';
import { NatragButtonComponent } from './ui/natrag-button/natrag-button.component';

@NgModule({
  declarations: [
    AppComponent,
    DodajKontaktComponent,
    PopisKontaktaComponent,
    UrediKontaktComponent,
    DetaljiKontaktaComponent,
    HomeComponent,
    NavigationComponent,
    ShortNamePipe,
    TestTableComponent,
    DialogBrisanjeComponent,
    NatragButtonComponent,
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

