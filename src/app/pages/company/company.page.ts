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
    // this.getData();
    
  }

  ionViewWillEnter(){
    // this.company = this.companyService.getData();
    this.getData();
  }

  async deleteCompany(id){
    console.log(id);
    this.companyService.deleteData(id).then(success =>{
      this.company = null; 
        this.getData();
        console.log("Getting Data");
      
      
    }).catch(err =>{
      this.company = null;
      this.getData();
      console.log("Error");
    })
    
    // this.company = this.companyService.getData();
  }

  getData(){
    this.company = null;
    this.company = this.companyService.getData();
  }

}
