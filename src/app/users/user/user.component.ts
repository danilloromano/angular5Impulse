import { Component, OnInit,Input } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  id: number;
  @Input() name: string;
  @Input() last_name: string;
  @Input() email: string;
  @Input() password :string;

  @Input()users:Object[];
  

  constructor() { 
  }

  ngOnInit() {
  }

}

