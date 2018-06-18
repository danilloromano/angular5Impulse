import { Component, OnInit } from '@angular/core';
import { UserRegisterComponent } from '../user-register/user-register.component'
import { UserService } from '../user.service';
import { UserComponent } from '../user/user.component';
import {DataTableModule} from 'primeng/datatable';
import {Router} from "@angular/router";
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {

  loading: boolean;
  cols: any[];
  users:Object[] = [];
  service: UserService;
  user: UserComponent;

  constructor(service: UserService, user: UserComponent, public router: Router) { 
    this.service = service;
    this.user = user;
  }

  fuckRemove(user) {
    this.service.remove(user)
      .subscribe ( 
      () => { 
        
        console.log('User removed');
        let newUsers = this.users.splice(0);
        let Index = newUsers.indexOf(user);
        newUsers.splice(Index, 1);
        this.users = newUsers;
      },
        erro => console.log(erro)
      );
  }

  redirect(){
    this.router.navigate(['/user-register']);
  }

  ngOnInit() {
      this.service.getUsers()
      .subscribe (
        users => this.users = users,
        erro => console.log(erro));
  }
}
