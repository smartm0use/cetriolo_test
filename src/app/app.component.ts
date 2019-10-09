import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'cetriolo';
  showCetriolo: boolean = false;

  toggleCetriolo() {
    this.showCetriolo = !this.showCetriolo;
  }
}

// Maggiori info su Cucumber:
// https://medium.com/@igniteram/e2e-testing-with-protractor-cucumber-using-typescript-564575814e4a
// https://www.amadousall.com/angular-e2e-with-cucumber/
