import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CompanyService } from "../../services/company.service";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-company',
  templateUrl: './company.page.html',
  styleUrls: ['./company.page.scss'],
})
export class CompanyPage implements OnInit {

  company: Observable<any>;

  constructor(private companyService:CompanyService) {
    
   }

  ngOnInit() {
    this.company = this.companyService.getData();
    
  }

  ionViewWillEnter(){
    // this.company = this.companyService.getData();
  }

  deleteCompany(id){
    console.log(id);
    this.companyService.deleteData(id);
    this.ngOnInit();
    // this.company = this.companyService.getData();
  }

}
