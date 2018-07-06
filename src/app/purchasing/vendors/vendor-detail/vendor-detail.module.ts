import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorDetailComponent } from './vendor-detail.component';
import { AppCommonModule } from '../../../common/app-common.module';
import { CreatePurchaseOrderPageModule } from '../../purchase-orders/create-purchase-order-page/create-purchase-order-page.module';
import { PurchaseOrderDetailModule } from '../../purchase-orders/purchase-order-detail/purchase-order-detail.module';

@NgModule({
  imports: [
    AppCommonModule,
    CommonModule,
    CreatePurchaseOrderPageModule,
    PurchaseOrderDetailModule
  ],
  declarations: [
    VendorDetailComponent
  ],
  exports: [
    VendorDetailComponent
  ]
})
export class VendorDetailModule { }
