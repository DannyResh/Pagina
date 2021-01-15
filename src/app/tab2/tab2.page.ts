import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  varArtifacts: any;
  fetchArtifacts: any;
  constructor(private httpC: HttpClient, public modalController: ModalController)
   {}
   ngOnInit(){
   this.apiArtifacts();
}


	apiArtifacts(){
		this.httpC.get("https://api.genshin.dev/artifacts").subscribe((artifacts: any)=>{
    
    this.varArtifacts = artifacts;
    console.log(this.varArtifacts);

	})
  }
  
  dynamicApiCallArtifacts(item){
    this.httpC.get(`https://api.genshin.dev/artifacts/${item}`).subscribe((artifacts: any)=>{
    this.fetchArtifacts = artifacts;
    console.log(this.fetchArtifacts);
    this.presentModal();
    })
}
async presentModal() {
  const modal = await this.modalController.create({
    component: ModalPage,
   
    componentProps: {
      modalObj: this.fetchArtifacts,
      type: "Artefacto",
    }
  });
  return await modal.present();
}
}
