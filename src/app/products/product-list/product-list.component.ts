import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ProductComponent } from '../product/product.component';
import { ProductRegisterComponent } from '../product-register/product-register.component';
import { DataTableModule } from 'primeng/datatable';
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  cols: any[];
  products:Object[] = [];
  serviceProduct: ProductService;
  product: ProductComponent;


  constructor(serviceProduct: ProductService, product: ProductComponent, public router: Router) { 
    this.router = router;
    this.product = product;
    this.serviceProduct = serviceProduct;
  }

  redirect(){
    this.router.navigate(['/product-register']);
  }

  getAllProducts() {
    this.serviceProduct.getProducts().subscribe (
      products => this.products = products,
      error => console.log(error)
    )
  }

  removeProduct(product) {
    this.serviceProduct.removeProduct(product).subscribe(
      () => {
        console.log('Product removed');
        let newProducts = this.products.splice(0);
        let Index = newProducts.indexOf(product);
        newProducts.splice(Index, 1);
        this.products = newProducts;
      },
      erro => console.log(erro)
    )
  }


  ngOnInit() {
    this.serviceProduct.getProducts()
    .subscribe (
      products => this.products = products,
      erro => console.log(erro));
  }

}
