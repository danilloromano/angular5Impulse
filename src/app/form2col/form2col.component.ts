import { Component, OnInit } from '@angular/core';
import { UserRegisterComponent } from '/home/danillo/angular-inpulse-app/angular-impulse-app/src/app/users/user-register/user-register.component';

@Component({
  selector: '[app-form2col]',
  templateUrl: './form2col.component.html',
  styleUrls: ['./form2col.component.css']
})
export class Form2colComponent implements OnInit {

  userRegister:UserRegisterComponent;
  
  constructor() { 
    
  }

  ngOnInit() {
  }

}
