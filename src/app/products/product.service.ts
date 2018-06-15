import { Component, OnInit, Inject } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs'; 
import { Injectable } from '@angular/core';
import { ProductComponent } from './product/product.component';

@Injectable()
export class ProductService {

    getProductUrl:string;
    getCategorys:string;
    postUrl:string;
    deleteUrl:string;
    putUrl:string;
    headers: Headers;
    http:Http;


    constructor(http:Http){
        this.getProductUrl = 'http://localhost:8080/productData';
        this.postUrl = 'http://localhost:8080/products/newProduct';
        this.deleteUrl = 'http://localhost:8080/products/deleteProduct';
        this.putUrl = 'http://localhost:8080/products/updateProduct';
        this.getCategorys = 'http://localhost:8080/productData/category'
        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        
    }

    getProducts():Observable<ProductComponent[]> {
        return this.http
        .get(this.getProductUrl)
        .map(res => res.json())
    }

    getCategory():Observable<ProductComponent[]> {
        return this.http
        .get(this.getCategorys)
        .map(res => res.json())
    }

    regist(product: ProductComponent):Observable<Response> {

        if (product.id) {
            return this.http.put(this.putUrl + '/' + product.id, JSON.stringify(product), 
            { headers: this.headers });
        }
        return this.http
        .post(this.postUrl, JSON.stringify(product), 
                { headers: this.headers }); 
    }

    remove(product: ProductComponent): Observable<Response> {
        return this.http
        .delete(this.deleteUrl + '/' + product.id);
    }
}

export class registerMessage {

    constructor(private _message:string, private _include: boolean) {
        this._message = _message;
        this._include = _include;
    }

    getMessage(): string {
        return this._message;
    }

    isInclude(): boolean {
        return this._include;
    }
}