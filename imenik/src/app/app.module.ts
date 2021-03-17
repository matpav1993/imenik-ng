import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { LoginComponent } from './ui/account/login/login.component';
import { RegisterComponent } from './ui/account/register/register.component';
import { DodajKontaktComponent } from './ui/imenik/dodaj-kontakt/dodaj-kontakt.component';
import { PopisKontaktaComponent } from './ui/imenik/popis-kontakta/popis-kontakta.component';
import { UrediKontaktComponent } from './ui/imenik/uredi-kontakt/uredi-kontakt.component';
import { DetaljiKontaktaComponent } from './ui/imenik/detalji-kontakta/detalji-kontakta.component';
import { HomeComponent } from './ui/imenik/home/home.component';
import { NavigationComponent } from './ui/shared/navigation/navigation.component';
import { ShortNamePipe } from './short-name.pipe';
import { TestTableComponent } from './ui/shared/test-table/test-table.component';
// import { DialogComponent } from './ui/dialog/dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DodajKontaktComponent,
    PopisKontaktaComponent,
    UrediKontaktComponent,
    DetaljiKontaktaComponent,
    HomeComponent,
    NavigationComponent,
    ShortNamePipe,
    TestTableComponent,
    // DialogComponent
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

