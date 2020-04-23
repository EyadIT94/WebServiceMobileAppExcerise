import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-companyupdate',
  templateUrl: './companyupdate.page.html',
  styleUrls: ['./companyupdate.page.scss'],
})
export class CompanyupdatePage implements OnInit {

  details = null;

  data:any={
    "companyId":"",
    "companyName": "",
    "companyEmail": "",
    "companyCr": "",
    "companyPhoneNumber": "",
    "companyMobileNumber": "",
    "companyAddress": "",
  }

  constructor(private activatedRoute: ActivatedRoute, private companyService:CompanyService) { }

  ngOnInit() {

    let id = this.activatedRoute.snapshot.paramMap.get('id');

    this.companyService.getDataByID(id).subscribe(result =>{
      this.details = result;
      console.log(this.details)
    }, err =>{
      console.log("error");
    });

    

  }

  updateData(){
    this.data.companyId = this.details.companyId;
    console.log(this.data)
    this.companyService.updateData(this.data);
  }

}
