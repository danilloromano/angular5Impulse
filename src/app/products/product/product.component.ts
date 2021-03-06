import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  id: number;
  @Input() nome: string;
  @Input() marca: string;
  @Input() custo: number;
  @Input() validade :string;
  @Input() venda :number;
  @Input() categoria_nome :number;
  @Input() categoria_id :number;
  @Input() descricao :string;
  @Input() quantidade :number;
  @Input() lucro :string;
  @Input() data :string;

  @Input()products:Object[];

  constructor() { }

  ngOnInit() {
  }

}

