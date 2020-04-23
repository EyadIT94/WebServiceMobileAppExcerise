import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyaddPage } from './companyadd.page';

const routes: Routes = [
  {
    path: '',
    component: CompanyaddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyaddPageRoutingModule {}
