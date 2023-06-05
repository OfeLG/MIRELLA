import { Component } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {
  received_data: any;
  public total: number;

  constructor(private datosService: DatosService){
    this.total= 0;
  }

  ngOnInit(): void {
    this.received_data = this.datosService.shared_data;
    this.calculateTotal();
  }

  calculateTotal(){
    for (const data of this.received_data) {
      this.total+=data.precio_final;
    }
  }
  remove(index: number){
    this.received_data.splice(index, 1);
  }
  operatingAmount(operator: String, index: number){
    let amount= this.received_data[index].cantidad;
    if(operator=="+" && amount<this.received_data[index].disponible){
      amount= amount+1;
    }
    else if (operator=="-" && amount!=1){
      amount= amount-1;
    }
    this.received_data[index].cantidad=amount;
  }
}
