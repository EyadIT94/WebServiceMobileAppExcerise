import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'company', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'company',
    loadChildren: () => import('./pages/company/company.module').then( m => m.CompanyPageModule)
  },
  {
    path: 'company/:id',
    loadChildren: () => import('./pages/companydetails/companydetails.module').then( m => m.CompanydetailsPageModule)
  },
  {
    path: 'companyadd',
    loadChildren: () => import('./pages/companyadd/companyadd.module').then( m => m.CompanyaddPageModule)
  },
  {
    path: 'company/update/:id',
    loadChildren: () => import('./pages/companyupdate/companyupdate.module').then( m => m.CompanyupdatePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
