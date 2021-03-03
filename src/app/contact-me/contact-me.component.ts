import { Component, Input, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {
  @Input()
  contact: Contact[];

  constructor(private backendService:BackendService) { 
    this.contact = [];
  }

  ngOnInit(): void {
    this.contact = this.backendService.getContact();
  }

}
