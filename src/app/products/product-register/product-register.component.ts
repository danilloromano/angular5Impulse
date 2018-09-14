import { Component, OnInit } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { ProductService } from '../product.service';
import { ProductListComponent } from '../product-list/product-list.component';
import { Categorys } from '../category.model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-product-register',
  templateUrl: './product-register.component.html',
  styleUrls: ['./product-register.component.css']
})

export class ProductRegisterComponent implements OnInit {

  product: ProductComponent = new ProductComponent;
  categorie:Categorys;
  categorys:Object[] = [];
  service: ProductService;
  productList: ProductListComponent;
  route: ActivatedRoute;
  message:string;

  constructor(categorie:Categorys,service:ProductService,productList: ProductListComponent,private router: Router,route: ActivatedRoute) {
    this.categorie = categorie;
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


  getCategorys() {
    this.service.getCategory().subscribe(function(categoryData) {
      this.categorys = categoryData;
      console.log(this.categorys)
    })
  }

  redirectBanger() {
    this.router.navigate(['/products'])
  }

  ngOnInit() {
    this.getCategorys();
  }

}
