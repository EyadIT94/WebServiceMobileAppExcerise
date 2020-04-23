import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompanyaddPageRoutingModule } from './companyadd-routing.module';

import { CompanyaddPage } from './companyadd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompanyaddPageRoutingModule
  ],
  declarations: [CompanyaddPage]
})
export class CompanyaddPageModule {}
