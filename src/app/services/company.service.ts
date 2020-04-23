import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class CompanyService {

 

  url = "http://localhost:8080/company";
  apikey = "";

  constructor(private http:HttpClient, private toastController: ToastController) { }


  getData(){
    // console.log(this.http.get(this.url ));
    return this.http.get(this.url + "/get");  
  }


  getDataByID(id){
    return this.http.get(this.url + "/get/" + id);
  }

  sendData(data){
    this.http.post(this.url + "/save  ", data).subscribe(success =>{
      this.presentToast("Success");
    }, err =>{
      // return "Error";
      this.presentToast("Error");

    });
  }


  async deleteData(id){
    this.http.delete(this.url + "/delete/" + id, { observe: 'response', responseType: 'text' })
    .subscribe(success =>{
      this.presentToast("Deleted Successfully");
      return "deleted";
    }, err =>{
      this.presentToast("Error in Delete");
      return "Error";
    })
  }

  updateData(data){
    this.http.put(this.url + "/update", data).subscribe(succ =>{
      this.presentToast("Updated");
    }, err =>{
      this.presentToast("Failed");
    });
  }


  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }



}
