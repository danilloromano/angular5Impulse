import { Component, OnInit } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { ProductService } from '../product.service';
import { ProductListComponent } from '../product-list/product-list.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Form2colComponent} from '../../form2col/form2col.component';


@Component({
  selector: 'app-product-register',
  templateUrl: './product-register.component.html',
  styleUrls: ['./product-register.component.css']
})

export class ProductRegisterComponent implements OnInit {

  product: ProductComponent = new ProductComponent;
  service: ProductService;
  productList: ProductListComponent;
  route: ActivatedRoute;
  message:string;

  constructor(service:ProductService,productList: ProductListComponent,private router: Router,route: ActivatedRoute) {
    this.service = service;
    this.productList = productList;
    this.route = route; 

    route.params.subscribe(params => {

      let id = params['id'];
      console.log(id);

      if(id) {
        this.service.getProductByID(id)
          .subscribe(
            product => this.product = product,
            erro => console.log(erro));    
      }            
    });
  }

  ngOnInit() {
  }

}
