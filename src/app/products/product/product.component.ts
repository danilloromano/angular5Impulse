import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductComponent implements OnInit {

  id: number;
  @Input() nome: string;
  @Input() marca: string;
  @Input() custo: number;
  @Input() validade :string;
  @Input() venda :number;
  @Input() categoris_id :number;
  @Input() descricao :string;
  @Input() quantidade :number;
  @Input() lucro :string;
  @Input() data :string;

  @Input()users:Object[];

  constructor() { }

  ngOnInit() {
  }

}

