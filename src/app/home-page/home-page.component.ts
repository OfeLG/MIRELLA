import { Component } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  public array_products: Array<any>;
  public showModal: Boolean;
  public index_detail: any;
  public amount;
  // public cart:Array<any>;
  public cart: any;


  constructor(private datosService: DatosService){
    // this.cart=[];
    this.cart={};
    this.amount=1;
    this.index_detail=0;
    this.showModal= false;
    this.array_products=[
      {
        nombre: "Collar Sol marino",
        descripcion: "Texto es un conjunto de enunciados que permite dar un mensaje coherente y ordenado, ya sea de manera escrita o a través de la palabra. Se trata de una estructura compuesta por signos y una escritura determinada que da espacio a una unidad con sentido.",
        precio: 150000,
        precio_final: 2000-2000*(15/100),
        descuento: 15,
        disponible: 5,
        cantidad: 1,
        img: "https://cdn.shopify.com/s/files/1/0366/4288/1676/products/Set-3-Collares-Indi-Oro-Entrelazos_1.jpg?v=1670862391"
      },
      {
        nombre: "Collar Plata de Ley",
        descripcion: "Texto es un conjunto de enunciados que permite dar un mensaje coherente y ordenado, ya sea de manera escrita o a través de la palabra. Se trata de una estructura compuesta por signos y una escritura determinada que da espacio a una unidad con sentido.",
        precio: 150000,
        precio_final: 2000-2000*(15/100),
        descuento: 15,
        disponible: 5,
        cantidad: 1,
        img: "https://cdn.shopify.com/s/files/1/0366/4288/1676/products/Set-3-Collares-Indi-Oro-Entrelazos_1.jpg?v=1670862391"
      },
      { 
        nombre: "Collar Cristal de Amor",
        descripcion: "Texto es un conjunto de enunciados que permite dar un mensaje coherente y ordenado, ya sea de manera escrita o a través de la palabra. Se trata de una estructura compuesta por signos y una escritura determinada que da espacio a una unidad con sentido.",
        precio: 150000,
        precio_final: 2000-2000*(15/100),
        descuento: 15,
        disponible: 5,
        cantidad: 1,
        img: "https://cdn.shopify.com/s/files/1/0366/4288/1676/products/Set-3-Collares-Indi-Oro-Entrelazos_1.jpg?v=1670862391"
      },
      {
        nombre: "Collar Sol marino",
        descripcion: "Texto es un conjunto de enunciados que permite dar un mensaje coherente y ordenado, ya sea de manera escrita o a través de la palabra. Se trata de una estructura compuesta por signos y una escritura determinada que da espacio a una unidad con sentido.",
        precio: 150000,
        precio_final: 2000-2000*(15/100),
        descuento: 15,
        disponible: 5,
        cantidad: 1,
        img: "https://cdn.shopify.com/s/files/1/0366/4288/1676/products/Set-3-Collares-Indi-Oro-Entrelazos_1.jpg?v=1670862391"
      },
      {
        nombre: "Collar Plata de Ley",
        descripcion: "Texto es un conjunto de enunciados que permite dar un mensaje coherente y ordenado, ya sea de manera escrita o a través de la palabra. Se trata de una estructura compuesta por signos y una escritura determinada que da espacio a una unidad con sentido.",
        precio: 150000,
        precio_final: 2000-2000*(15/100),
        descuento: 15,
        disponible: 5,
        cantidad: 1,
        img: "https://cdn.shopify.com/s/files/1/0366/4288/1676/products/Set-3-Collares-Indi-Oro-Entrelazos_1.jpg?v=1670862391"
      },
      { 
        nombre: "Collar Cristal de Amor",
        descripcion: "Texto es un conjunto de enunciados que permite dar un mensaje coherente y ordenado, ya sea de manera escrita o a través de la palabra. Se trata de una estructura compuesta por signos y una escritura determinada que da espacio a una unidad con sentido.",
        precio: 150000,
        precio_final: 2000-2000*(15/100),
        descuento: 15,
        disponible: 5,
        cantidad: 1,
        img: "https://cdn.shopify.com/s/files/1/0366/4288/1676/products/Set-3-Collares-Indi-Oro-Entrelazos_1.jpg?v=1670862391"
      },
      {
        nombre: "Collar Sol marino",
        descripcion: "Texto es un conjunto de enunciados que permite dar un mensaje coherente y ordenado, ya sea de manera escrita o a través de la palabra. Se trata de una estructura compuesta por signos y una escritura determinada que da espacio a una unidad con sentido.",
        precio: 150000,
        precio_final: 2000-2000*(15/100),
        descuento: 15,
        disponible: 5,
        cantidad: 1,
        img: "https://cdn.shopify.com/s/files/1/0366/4288/1676/products/Set-3-Collares-Indi-Oro-Entrelazos_1.jpg?v=1670862391"
      },
      {
        nombre: "Collar Plata de Ley",
        descripcion: "Texto es un conjunto de enunciados que permite dar un mensaje coherente y ordenado, ya sea de manera escrita o a través de la palabra. Se trata de una estructura compuesta por signos y una escritura determinada que da espacio a una unidad con sentido.",
        precio: 150000,
        precio_final: 2000-2000*(15/100),
        descuento: 15,
        disponible: 5,
        cantidad: 1,
        img: "https://cdn.shopify.com/s/files/1/0366/4288/1676/products/Set-3-Collares-Indi-Oro-Entrelazos_1.jpg?v=1670862391"
      },
      { 
        nombre: "Collar Cristal de Amor",
        descripcion: "Texto es un conjunto de enunciados que permite dar un mensaje coherente y ordenado, ya sea de manera escrita o a través de la palabra. Se trata de una estructura compuesta por signos y una escritura determinada que da espacio a una unidad con sentido.",
        precio: 150000,
        precio_final: 2000-2000*(15/100),
        descuento: 15,
        disponible: 5,
        cantidad: 1,
        img: "https://cdn.shopify.com/s/files/1/0366/4288/1676/products/Set-3-Collares-Indi-Oro-Entrelazos_1.jpg?v=1670862391"
      },
      {
        nombre: "Collar Sol marino",
        descripcion: "Texto es un conjunto de enunciados que permite dar un mensaje coherente y ordenado, ya sea de manera escrita o a través de la palabra. Se trata de una estructura compuesta por signos y una escritura determinada que da espacio a una unidad con sentido.",
        precio: 20000,
        precio_final: 2000-2000*(5/100),
        descuento: 5,
        disponible: 5,
        cantidad: 1,
        img: "https://cdn.shopify.com/s/files/1/0366/4288/1676/products/Set-3-Collares-Indi-Oro-Entrelazos_1.jpg?v=1670862391"
      },
      {
        nombre: "Collar Plata de Ley",
        descripcion: "Texto es un conjunto de enunciados que permite dar un mensaje coherente y ordenado, ya sea de manera escrita o a través de la palabra. Se trata de una estructura compuesta por signos y una escritura determinada que da espacio a una unidad con sentido.",
        precio: 50000,
        precio_final: 50000-2000*(10/100),
        descuento: 10,
        disponible: 5,
        cantidad: 1,
        img: "https://cdn.shopify.com/s/files/1/0366/4288/1676/products/Set-3-Collares-Indi-Oro-Entrelazos_1.jpg?v=1670862391"
      },
      { 
        nombre: "Collar Cristal de Amor",
        descripcion: "Texto es un conjunto de enunciados que permite dar un mensaje coherente y ordenado, ya sea de manera escrita o a través de la palabra. Se trata de una estructura compuesta por signos y una escritura determinada que da espacio a una unidad con sentido.",
        precio: 150000,
        precio_final: 150000-2000*(15/100),
        descuento: 15,
        disponible: 5,
        cantidad: 1,
        img: "https://cdn.shopify.com/s/files/1/0366/4288/1676/products/Set-3-Collares-Indi-Oro-Entrelazos_1.jpg?v=1670862391"
      }
    ];
  }
  openModal(index: any){
    this.showModal= true;
    this.index_detail = index;
  }
  closeModal(){
    this.showModal= false;
  }
  addProduct(index: any){
    // this.cart.push(this.array_products[index])
    // this.cart[this.cart.length - 1].cantidad=this.amount;
    // this.datosService.shared_data = this.cart;
    this.cart=this.array_products[index];
    this.cart.cantidad=this.amount;
    this.datosService.shared_data.push(this.cart);
    if(this.showModal==true){
      this.closeModal();
    }
  }
  operatingAmount(operator: String){
    if(operator=="+" && this.amount<this.array_products[this.index_detail].disponible){
      this.amount= this.amount+1;
    }
    else if (operator=="-" && this.amount!=1){
      this.amount= this.amount-1;
    }
  }
}
