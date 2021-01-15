import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  varWeapons: any;
  fetchWeapons: any;
  constructor(private httpC: HttpClient, public modalController: ModalController)
   {}
   ngOnInit(){
   this.apiWeapons();
}

	apiWeapons(){
		this.httpC.get("https://api.genshin.dev/weapons").subscribe((weapons: any)=>{
    
    this.varWeapons = weapons;
    console.log(this.varWeapons);

	})
  }
  
  dynamicApiCallWeapons(item){
    this.httpC.get(`https://api.genshin.dev/weapons/${item}`).subscribe((weapons: any)=>{
    this.fetchWeapons = weapons;
    console.log(this.fetchWeapons);
    this.presentModal();
    })
}
async presentModal() {
  const modal = await this.modalController.create({
    component: ModalPage,
   
    componentProps: {
      modalObj: this.fetchWeapons,
      type: "Arma",
    }
  });
  return await modal.present();
}


}
