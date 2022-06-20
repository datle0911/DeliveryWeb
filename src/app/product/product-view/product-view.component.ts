import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  constructor(private service: SharedService) { }

  ProductsList:any = [];
  
  ngOnInit(): void {
    this.refreshProductsList();
  }

  refreshProductsList(){
    this.service.getProductsList().subscribe(data => {
      this.ProductsList = data;
    })
  }
}
