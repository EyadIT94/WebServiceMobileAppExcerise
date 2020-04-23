import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompanyupdatePageRoutingModule } from './companyupdate-routing.module';

import { CompanyupdatePage } from './companyupdate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompanyupdatePageRoutingModule
  ],
  declarations: [CompanyupdatePage]
})
export class CompanyupdatePageModule {}
