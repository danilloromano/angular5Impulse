import { Component, OnInit, Inject } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs'; 
import { Injectable } from '@angular/core';
import { UserComponent } from './user/user.component';

@Injectable()
export class UserService {

    getUserUrl:string;
    postUrl:string;
    deleteUrl:string;
    putUrl:string;
    headers: Headers;
    http:Http;


    constructor(http:Http){
        this.getUserUrl = 'http://localhost:8080/userData';
        this.postUrl = 'http://localhost:8080/users/newUser';
        this.deleteUrl = 'http://localhost:8080/users/deleteUser';
        this.putUrl = 'http://localhost:8080/user/change';
        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');

    }

    getUsers():Observable<UserComponent[]> {
        return this.http
        .get(this.getUserUrl)
        .map(res => res.json())
    }

    getUsersForId(id: string):Observable<UserComponent> {
        return this.http
        .get(this.getUserUrl + '/' + id)
        .map(res => res.json())
    }

    regist(user: UserComponent):Observable<Response> {

        if (user.id) {
            return this.http.put(this.putUrl + '/' + user.id, JSON.stringify(user), 
            { headers: this.headers });
        }
        return this.http
        .post(this.postUrl, JSON.stringify(user), 
                { headers: this.headers }); 
    }

    remove(user: UserComponent): Observable<Response> {
        return this.http
        .delete(this.deleteUrl + '/' + user.id);
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