import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerViewComponent } from './customer/customer-view/customer-view.component';
import { CustomerActionComponent } from './customer/customer-action/customer-action.component';
import { OrderComponent } from './order/order.component';
import { OrderViewComponent } from './order/order-view/order-view.component';
import { OrderActionComponent } from './order/order-action/order-action.component';
import { ProductComponent } from './product/product.component';
import { ProductViewComponent } from './product/product-view/product-view.component';
import { ProductActionComponent } from './product/product-action/product-action.component';
import { SharedService } from './shared.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    OrderComponent,
    OrderViewComponent,
    OrderActionComponent,
    CustomerViewComponent,
    CustomerActionComponent,
    ProductComponent,
    ProductViewComponent,
    ProductActionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
