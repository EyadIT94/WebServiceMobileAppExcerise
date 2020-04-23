import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from 'src/app/services/company.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-companydetails',
  templateUrl: './companydetails.page.html',
  styleUrls: ['./companydetails.page.scss'],
})
export class CompanydetailsPage implements OnInit {

  details = null;

  constructor(private activatedRoute: ActivatedRoute, private companyService:CompanyService) { }

  ngOnInit() {

    let id = this.activatedRoute.snapshot.paramMap.get('id');

    this.companyService.getDataByID(id).subscribe(result =>{
      this.details = result;
    }, err =>{
      console.log("error");
    });

  }

}
