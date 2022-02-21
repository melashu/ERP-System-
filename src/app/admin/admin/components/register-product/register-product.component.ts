import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
// import{HttpCl}
@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.css']
})
export class RegisterProductComponent implements OnInit {

  constructor(private httpss: HttpClient) {
    
   }

  ngOnInit(): void {
  }
  doThis(): Observable<boolean> {
    return of(true);
  }
  
  yesHere() {
    this.doThis().subscribe
  }

}
