import { Injectable } from '@angular/core';
import { Contact } from './models/contact';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor() { }

  getSkill() {
    return [
      "HTML","CSS","JavaScript","TypeScript","Angular","SQL,Python"
    ];
  }
  getContact():Contact[] {
    return [{
      phone: "064-7145982",
      email: "skakanaporn@gmail.com",
      address: "131/10 Soi Nuan Chan 64 Nuan Chan Rd, Khlong Khum Bueng Khum, Bangkok 10230",
      github: "https://github.com/Kakanaporn",
      linkedin: "https://www.linkedin.com/in/supanat-kakakanaporn-610270151/",
    }];
  }

}
