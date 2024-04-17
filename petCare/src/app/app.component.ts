import { HttpClient } from '@angular/common/http';
import { Component, Input ,ChangeDetectorRef, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'petCare';
 
  ngOnInit(): void {

  }
  constructor(private router: Router) {}
 
  redirectToCustomer() {
    this.router.navigate(['customer-list']);
  }

  
    
 
}
