import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  showContactForm: boolean = false;
  showAboutusForm: boolean = false;

  ngOnInit(): void {

  }

  toggleContactFormVisibility() {
    this.showContactForm = !this.showContactForm;
    this.showAboutusForm = false;
  }

  toggleAboutUsFormVisibility() {
    this.showAboutusForm = !this.showAboutusForm;
    this.showContactForm = false;
  }
}
