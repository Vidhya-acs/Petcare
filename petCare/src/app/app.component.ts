import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'petCare';
  @Input() customer: any;
  accordionOpen: boolean = false;
  toggleAccordion() {
    this.accordionOpen = !this.accordionOpen;
  }
  customers = [
    { id: '1', name: 'Customer 1' },
    { id: '2', name: 'Customer 2' },
    { id: '3', name: 'Customer 3' }
    // Add more customers as needed
  ];
}
