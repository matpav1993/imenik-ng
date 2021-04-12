export class Kontakt {
    Id: number;
    Ime: string;
    Prezime: string;
    Telefon: string;
    Email: string;
    Opis: string;


    constructor(
        id: number,
        ime: string,
        prezime: string,
        telefonskiBroj: string,
        email: string,
        opis: string)
         {

        this.Id = id;
        this.Ime = ime;
        this.Prezime = prezime;
        this.Telefon = telefonskiBroj;
        this.Email = email;
        this.Opis = opis;
    }
}
