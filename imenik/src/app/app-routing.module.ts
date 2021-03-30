import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './ui/account/login/login.component';
import { RegisterComponent } from './ui/account/register/register.component';
import { DetaljiKontaktaComponent } from './ui/imenik/detalji-kontakta/detalji-kontakta.component';
import { DodajKontaktComponent } from './ui/imenik/dodaj-kontakt/dodaj-kontakt.component';
import { HomeComponent } from './ui/imenik/home/home.component';
import { PopisKontaktaComponent } from './ui/imenik/popis-kontakta/popis-kontakta.component';
import { UrediKontaktComponent } from './ui/imenik/uredi-kontakt/uredi-kontakt.component';
import { TestTableComponent } from './ui/shared/test-table/test-table.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dodaj', component: DodajKontaktComponent },
  { path: 'uredi/:id', component: UrediKontaktComponent },
  { path: 'detalji/:id', component: DetaljiKontaktaComponent },
  { path: 'popis', component:  PopisKontaktaComponent },
  { path: 'popis/test', component:  TestTableComponent },
  { path: '*', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

