import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiHandler {

  constructor(private http: HttpClient) { }

  getBurgetList() {
    return this.http.get('https://demo5250948.mockable.io/allBurgersList');
  }

}
