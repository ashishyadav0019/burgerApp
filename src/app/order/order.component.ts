import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  @Input() showCart;
  @Input() orderList;
  @Input() orderListLength;

  constructor() {
  }

  ngOnInit() {
    console.log(this.orderList)
  }
  placeOrder(){
    alert('Order Placed. It will be delivered in 5 mins')
  }

}
