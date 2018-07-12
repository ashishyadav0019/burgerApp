import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiHandler {

  orderList: any = [];
  constructor(private http: HttpClient) { }

  getBurgetList() {
    return this.http.get('https://demo5250948.mockable.io/allBurgersList');
  }

  pushDataInOrderList(item) {
    this.orderList.push(item)
  }

  getOrderList() {
    return this.orderList;
  }

}
