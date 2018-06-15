import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {HttpModule} from '@angular/http';
import 'rxjs/add/operator/map';
import {FormsModule} from '@angular/forms'
import { routing } from './app.routs';

import { AppComponent } from './app.component';
import {AccordionModule} from 'primeng/accordion';     
import {MenuItem} from 'primeng/components/common/api'; 
import { DataTableModule } from 'primeng/datatable'; 
import {TableModule} from 'primeng/table';



import {
  MatTableModule,
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatButtonModule,
  MatSortModule,
  MatIconModule,
  MatMenuModule,
  MatIcon
 
} from '@angular/material';

import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './product/products/products.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './users/user/user.component';
import { UserRegisterComponent } from './users/user-register/user-register.component';
import { UserListComponent } from './users/user-list/user-list.component';
import {UserService} from './users/user.service';
import {usersModule} from './users/users.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    UserListComponent,
    LoginComponent,
    HomeComponent,
    UserRegisterComponent

  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    routing,
    AngularFontAwesomeModule,
    DataTableModule,
    TableModule,
    AccordionModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatButtonModule,
    FormsModule,
    usersModule,
    MatMenuModule,
    MatIconModule
  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
