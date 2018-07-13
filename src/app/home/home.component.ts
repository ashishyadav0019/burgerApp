import { Component, OnInit } from '@angular/core';
import { ApiHandler } from '../services/apiHandler';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  burgerList: Object[] = [];
  searchText: string;
  burgerOriginalList: Object[] = [];
  priceRange: string[];
  foodCategory: string[];
  ratings: number[];
  selectedType: string = '';
  orderList: Object[] = [];
  showCart:boolean=false;
  orderListLength:number=0;

  constructor(private restService: ApiHandler) { }

  ngOnInit() {
    this.priceRange = ['50-100', '100-200', '300-400', '400-500'];
    this.ratings = [5, 4, 3, 2, 1];
    this.foodCategory = ['veg', 'non veg'];

    this.restService.getBurgetList()
      .subscribe((response: any) => {
      this.burgerList = response;
      this.burgerOriginalList = response;
    }, (err) => {
      alert("Internal server error");
    });
  }


  onFilterChange(data, filterType) {
    this.selectedType = data; let arr;
    if (filterType === 'category') {
      arr = this.burgerOriginalList.filter((item: any) => {
        if (item.category === data)
          return item;
      })
    }
    else if (filterType === 'price') {
      let amount = data.split('-');
      arr = this.burgerOriginalList.filter((item: any) => {
        if (parseFloat(item.discountedPrice) >= parseFloat(amount[0])
          && parseFloat(item.discountedPrice) <= parseFloat(amount[1]))
          return item;
      })
    }

    else if (filterType === 'rating') {
      arr = this.burgerOriginalList.filter((item: any) => {
        if (item.rating === data.toString())
          return item;
      })
    }

    this.burgerList = arr;

  }

  clearFilters(){
    this.selectedType='';
    this.burgerList = this.burgerOriginalList;
  }

  searchBurger(str) {
    if (str && this.burgerList.length) {
      let arr = this.burgerOriginalList.filter((item: any) => {
        if (item.name.toLowerCase() === str.toLowerCase())
          return item;
      });
      this.burgerList = arr;
    }
    else {
      this.burgerList = this.burgerOriginalList;
    }
  }

  addItem(item) {
    this.orderList.push(item);
    this.orderListLength = this.orderList.length;
  }

}
