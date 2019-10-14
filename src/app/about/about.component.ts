import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  title: string = 'Cetriolo App';
  showCetriolo: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleCetriolo() {
    this.showCetriolo = !this.showCetriolo;
  }
}
