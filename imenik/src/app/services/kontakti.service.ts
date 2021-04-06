import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KontaktiService {

  constructor() { }

  getKontakti(): any {

    const kontakti = localStorage.getItem('kontakti');

    if (kontakti === null) {
      this.saveKontakti([]);
    }

    return JSON.parse(localStorage.getItem('kontakti'));

  }

  private saveKontakti(kontakti): void {
    localStorage.setItem('kontakti', JSON.stringify(kontakti));
  }

  addKontakt(kontakt): void {

    kontakt.Id = this.generateId();

    const kontakti = this.getKontakti();
    kontakti.push(kontakt);

    this.saveKontakti(kontakti);

  }

  getKontakt(id): any {

    const kontakti = this.getKontakti();
    const indexKontakta = kontakti.findIndex((k => k.Id === id));

    return kontakti[indexKontakta];

  }

  updateKontakt(kontakt): void {

    const kontakti = this.getKontakti();
    const indexKontakta = kontakti.findIndex((k => k.Id === kontakt.Id));

    kontakti[indexKontakta].Ime = kontakt.Ime;
    kontakti[indexKontakta].Prezime = kontakt.Prezime;
    kontakti[indexKontakta].Telefon = kontakt.Telefon;
    kontakti[indexKontakta].Email = kontakt.Email;
    kontakti[indexKontakta].Opis = kontakt.Opis;

    this.saveKontakti(kontakti);

  }

  deleteKontakt(id): void {

    let kontakti = this.getKontakti();
    kontakti = kontakti.filter(k => k.Id !== id);

    this.saveKontakti(kontakti);
  }

  private generateId(): number {
    const min = 999;
    const max = 999999;
    return Math.floor(Math.random() * (max - min)) + min;
  }


}
