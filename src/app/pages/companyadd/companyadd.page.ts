import { Component, OnInit } from '@angular/core';
import { CompanyService } from "../../services/company.service";
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-companyadd',
  templateUrl: './companyadd.page.html',
  styleUrls: ['./companyadd.page.scss'],
})
export class CompanyaddPage implements OnInit {

  data:any={
    "companyName": "",
    "companyEmail": "",
    "companyCr": "",
    "companyPhoneNumber": "",
    "companyMobileNumber": "",
    "companyAddress": "",
  }

  constructor(private companyService:CompanyService, private toastController: ToastController) { }

  ngOnInit() {
  }


  sendData(){
    

    
      try {
        this.companyService.sendData(this.data);
      } catch (error) {
        
      }

  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

}
