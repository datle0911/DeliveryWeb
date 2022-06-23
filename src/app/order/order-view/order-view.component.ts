import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.css']
})
export class OrderViewComponent implements OnInit {

  constructor(private service: SharedService) { }

  OrdersList: any = []

  ngOnInit(): void {
    this.refreshOrdersList();
  }

  refreshOrdersList() {
    this.service.getOrdersList().subscribe(data =>
      this.OrdersList = data);
  }

}
