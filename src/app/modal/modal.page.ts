import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],

})
export class ModalPage implements OnInit {
  @Input() modalObj: any;
  @Input() type: string;
  constructor( public modalController: ModalController) { 



  }
  dismissModal(){
    this.modalController.dismiss({
      'dismissed': true
    })
    }
  ngOnInit() {
  }
  
 
}
