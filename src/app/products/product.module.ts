import { NgModule } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductRegisterComponent } from './product-register/product-register.component';
import { ProductReportComponent } from './product-report/product-report.component';
import { ProductService } from './product.service';
import { CommonModule } from '@angular/common';
import { Categorys } from './category.model';


@NgModule({
    declarations: [ProductComponent],
    imports:[CommonModule],
    providers: [ 
        ProductService,
        Categorys,
        ProductComponent,
        ProductRegisterComponent,
        ProductListComponent,
        ProductReportComponent
    ]
})

export class productModule {

}