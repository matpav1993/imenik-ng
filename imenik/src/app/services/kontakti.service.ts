import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KontaktiService {

  constructor() { }

  getKontakti() {

    let kontakti = localStorage.getItem('kontakti');

    if (kontakti === null) {
      this.saveKontakti([]);
    }

    return JSON.parse(localStorage.getItem('kontakti'));

  }

  private saveKontakti(kontakti) {
    localStorage.setItem('kontakti', JSON.stringify(kontakti));
  }

  addKontakt(kontakt) {

    kontakt.id = this.generateId()

    let kontakti = this.getKontakti();
    kontakti.push(kontakt);

    this.saveKontakti(kontakti);

  }

  getKontakt(id) {

    let kontakti = this.getKontakti();
    let indexKontakta = kontakti.findIndex((k => k.Id == id));

    return kontakti[indexKontakta];

  }

  updateKontakt(kontakt) {

    let kontakti = this.getKontakti();
    let indexKontakta = kontakti.findIndex((k => k.Id == kontakt.Id));

    kontakti[indexKontakta].Ime = kontakt.Ime;
    kontakti[indexKontakta].Prezime = kontakt.Prezime;

    this.saveKontakti(kontakti);

  }

  deleteKontakt(id) {

    let kontakti = this.getKontakti();
    kontakti = kontakti.filter(k => k.Id !== id)

    this.saveKontakti(kontakti);
  }

  private generateId() {
    let min = 999;
    let max = 999999;
    return Math.floor(Math.random() * (max - min)) + min;
  }


}
