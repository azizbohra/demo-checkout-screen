import { Component } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Order } from './../models/Order.model';
import { Product } from './../models/Product.model';
import { PaymentMethod } from './../models/PaymentMethod.model';
import { Delivery } from './../models/Delivery.model';
import { Shipping } from './../models/Shipping.model';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public order: Order;
  public products: Product[];
  public paymentMethods: PaymentMethod[];
  public delivery: Delivery;
  public shipping: Shipping;

  constructor(private http: HttpClient, ) {
    this.products = [
      {
        id: 1,
        name: 'Pink Gerberas and Roses',
        image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRjrf6ZsiLs4mr1wu7hB11Ao1ygyKsZKnFJGIVrO5d75IeiZLJX4-nMEcNKQNvajY459f6ry0moNHPr3lS_lm03qCamAwf5eRKRM5Fm9FfdJNICOq1lmGxI&usqp=CAc',
        quantity: 1,
        height: 75,
        width: 60,
        price: 34
      }
    ];

    this.paymentMethods = [
      {
        id: 1,
        name: 'Knet',
        icon: 'https://via.placeholder.com/40x30',
        isChecked: false
      },
      {
        id: 2,
        name: 'Credit Card',
        icon: 'https://via.placeholder.com/40x30',
        isChecked: false
      },
      {
        id: 3,
        name: 'Paypal',
        icon: 'https://via.placeholder.com/40x30',
        isChecked: false
      }
    ];

    this.delivery = {
      date: '2019-05-13',
      timeFrom: '2019-05-13 09:00:00',
      timeTo: '2019-05-13 16:00:00'
    };

    this.shipping = {
      name: 'Sheeber Shamsudheen',
      mobile: '+965 50155835',
      address: 'Abdulla salem, Block 4, Street 11, House number 300, Opposite British'
    };

    this.order = {
      id: 2567,
      items: this.products,
      delivery: this.delivery,
      cardMessage: 'Wish you happy birthday mom',
      shipping: this.shipping,
      paymentMethod: 0,
      note: 'Call me once you reach in front of my house',
      subTotal: 34.000,
      deliveryCharge: 0.000,
      total: 34.000
    };
  }

  selectPaymentMethod(id: number) {
    this.paymentMethods.forEach((item) => {
      if (item.id === id) {
        item.isChecked = true;
      } else {
        item.isChecked = false;
      }
    });
  }

  placeOrder() {
    const paymentMethod = this.paymentMethods.filter((item) => {
      return item.isChecked;
    })[0];

    if (paymentMethod === undefined) {
      alert('Please select a payment method');
      return;
    }

    this.order.paymentMethod = paymentMethod.id;

    this.http.post('http://localhost:3000/orders', this.order).subscribe(() => {
      console.log(this.order);
      alert('Order placed successfully');
    });

  }

}
