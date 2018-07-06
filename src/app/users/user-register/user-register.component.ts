import { Component, OnInit, Input } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { UserService } from '../user.service';
import { UserListComponent } from '../user-list/user-list.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Form2colComponent} from '../../form2col/form2col.component';


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})

export class UserRegisterComponent {

  user: UserComponent = new UserComponent;
  service: UserService;
  userList: UserListComponent;
  route: ActivatedRoute;
  message:string;


  constructor(service:UserService,userList: UserListComponent,private router: Router,route: ActivatedRoute ) {
    this.service = service;
    this.userList = userList;
    this.route = route;

    route.params.subscribe(params => {

      let id = params['id'];
      console.log(id);

      if(id) {
        this.service.getUsersForId(id)
          .subscribe(
            user => this.user = user,
            erro => console.log(erro));    
      }            
    });

  }

  redirect(){
    this.router.navigate(['/users']);
  }

  register(event)  {
    event.preventDefault();
    console.log(this.user);

    this.service.regist(this.user)
      .subscribe(() => {
        this.user = new UserComponent();
        this.service.getUsers()
        .subscribe(users => this.userList.users = users)
        // this.router.navigate(['/users']);
        console.log('Usuario salvo com sucesso');
        this.message = 'Usuario salvo com sucesso';
      }, erro =>  console.log(erro)

    );
  }

}
