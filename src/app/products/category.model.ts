import { Input } from '@angular/core';


export class Categorys {

    id: number;
    @Input() nome: string;
    @Input() categorys:Object[];
}