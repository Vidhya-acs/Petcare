import { HttpClient } from '@angular/common/http';
import { Component, Input ,ChangeDetectorRef, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {
  @Input() customerId: string | undefined;
  @Input() customer: any;
  accordionOpen: boolean = true;
  constructor(private cdr: ChangeDetectorRef,private http: HttpClient) {}
  ngOnInit(): void {

  }

  toggleAccordion() {
  
    
    this.accordionOpen = !this.accordionOpen;
    console.log('toggle',this.accordionOpen);
    this.cdr.detectChanges();
  }
  customers = [
    { id: '1', name: 'Customer 1' },
    { id: '2', name: 'Customer 2' },
    { id: '3', name: 'Customer 3' }
    // Add more customers as needed
  ];
  sendService() {
    this.getData('https://node-js-api-gx25.onrender.com/customer-list').subscribe(data => {
      console.log(data); // Handle the response data
    }, error => {
      console.error('Error fetching data:', error); // Handle errors
    });
    // Add logic to handle sending service
    console.log("Service sent to customer: " );
  }
  getData(url:string): Observable<any> {
    return this.http.get<any>(url);
  }
}
