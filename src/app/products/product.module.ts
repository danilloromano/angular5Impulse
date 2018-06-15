import { NgModule } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductRegisterComponent } from './product-register/product-register.component';
import { ProductReportComponent } from './product-report/product-report.component';
import { ProductService } from './product.service';
import { CommonModule } from '@angular/common';
import { UserRegisterComponent } from '../users/user-register/user-register.component';
import { UserListComponent } from '../users/user-list/user-list.component';


@NgModule({
    declarations: [ProductComponent],
    imports:[CommonModule],
    providers: [ 
        ProductService,
        ProductComponent,
        ProductRegisterComponent,
        ProductListComponent,
        ProductReportComponent
    ]
})

export class productModule {

}