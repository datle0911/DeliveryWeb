import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit {

  constructor(private service: SharedService) { }

  CustomersList:any = []

  ngOnInit(): void {
    this.refreshCustomersList();
  }

  refreshCustomersList(){
    this.service.getCustomersList().subscribe(data => {
      this.CustomersList = data;
    })
  }
}
