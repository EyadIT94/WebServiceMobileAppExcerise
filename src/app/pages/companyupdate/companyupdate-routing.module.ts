import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyupdatePage } from './companyupdate.page';

const routes: Routes = [
  {
    path: '',
    component: CompanyupdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyupdatePageRoutingModule {}
