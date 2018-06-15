import { NgModule } from '@angular/core';
import { UserComponent } from './user/user.component';
import { UserService } from './user.service';
import { CommonModule } from '@angular/common';
import { UserRegisterComponent } from '../users/user-register/user-register.component';
import { UserListComponent } from '../users/user-list/user-list.component';


@NgModule({
    declarations: [UserComponent],
    imports:[CommonModule],
    providers: [ UserService, UserComponent,UserRegisterComponent,UserListComponent ]
})

export class usersModule {

}