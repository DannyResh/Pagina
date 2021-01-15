import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  varCharacters: any;
  fetcCharacters: any;
  constructor(private httpC: HttpClient, public modalController: ModalController)
   {}
   ngOnInit(){
   this.apiCharacters();
}

	apiCharacters(){
		this.httpC.get("https://api.genshin.dev/characters").subscribe((characters: any)=>{
    
    this.varCharacters = characters;
    console.log(this.varCharacters);

	})
  }
  
  dynamicApiCallCharacters(item){
    this.httpC.get(`https://api.genshin.dev/characters/${item}`).subscribe((characters: any)=>{
    this.fetcCharacters = characters;
    console.log(this.fetcCharacters);
    this.presentModal();
    })
}

async presentModal() {
  const modal = await this.modalController.create({
    component: ModalPage,
   
    componentProps: {
      modalObj: this.fetcCharacters,
      type: "Personaje",
    }
  });
  return await modal.present();
}
}
