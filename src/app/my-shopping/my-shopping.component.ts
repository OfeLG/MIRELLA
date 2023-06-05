import { Component } from '@angular/core';

@Component({
  selector: 'app-my-shopping',
  templateUrl: './my-shopping.component.html',
  styleUrls: ['./my-shopping.component.scss']
})
export class MyShoppingComponent {
  public array_invoice: Array<any>;
  public showModal: Boolean;
  public index_invoice: number;

  constructor(){
    this.showModal= false;
    this.index_invoice= 0;
    this.array_invoice=[
      {
        referencia: 1001,
        fecha_pedido: "12-03-23",
        fecha_estimada: "20-03-23",
        fecha_real: "30-03-23",
        total: 20000
      },
      {
        referencia: 1001,
        fecha_pedido: "12-03-23",
        fecha_estimada: "20-03-23",
        fecha_real: "30-03-23",
        total: 20000
      },
      {
        referencia: 1001,
        fecha_pedido: "12-03-23",
        fecha_estimada: "20-03-23",
        fecha_real: "30-03-23",
        total: 20000
      },
      {
        referencia: 1001,
        fecha_pedido: "12-03-23",
        fecha_estimada: "20-03-23",
        fecha_real: "30-03-23",
        total: 20000
      },
      {
        referencia: 1001,
        fecha_pedido: "12-03-23",
        fecha_estimada: "20-03-23",
        fecha_real: "30-03-23",
        total: 20000
      },
      {
        referencia: 1001,
        fecha_pedido: "12-03-23",
        fecha_estimada: "20-03-23",
        fecha_real: "30-03-23",
        total: 20000
      },
      {
        referencia: 1001,
        fecha_pedido: "12-03-23",
        fecha_estimada: "20-03-23",
        fecha_real: "30-03-23",
        total: 20000
      },
      {
        referencia: 1001,
        fecha_pedido: "12-03-23",
        fecha_estimada: "20-03-23",
        fecha_real: "30-03-23",
        total: 20000
      },
      {
        referencia: 1001,
        fecha_pedido: "12-03-23",
        fecha_estimada: "20-03-23",
        fecha_real: "30-03-23",
        total: 20000
      },
      {
        referencia: 1001,
        fecha_pedido: "12-03-23",
        fecha_estimada: "20-03-23",
        fecha_real: "30-03-23",
        total: 20000
      },
      {
        referencia: 1001,
        fecha_pedido: "12-03-23",
        fecha_estimada: "20-03-23",
        fecha_real: "30-03-23",
        total: 20000
      },
      {
        referencia: 1001,
        fecha_pedido: "12-03-23",
        fecha_estimada: "20-03-23",
        fecha_real: "30-03-23",
        total: 20000
      }
    ];
  }

  openModal(index: any){
    this.showModal= true;
    this.index_invoice = index;
  }
  closeModal(){
    this.showModal= false;
  }
}
