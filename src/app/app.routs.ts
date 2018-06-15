import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './products/product/product.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserRegisterComponent} from './users/user-register/user-register.component';

const appRoutes:Routes = [
    { path:"", component:HomeComponent },
    { path:"products", component: ProductComponent },
    { path:"users", component: UserListComponent },
    { path:"user-register", component: UserRegisterComponent },
    { path:"user-register/:id", component: UserRegisterComponent },

    { path: '**', redirectTo: ""}
];

export const routing = RouterModule.forRoot(appRoutes);