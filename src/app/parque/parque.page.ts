import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalBienvenidoPage } from '../modal-bienvenido/modal-bienvenido.page';
  

@Component({
  selector: 'app-parque',
  templateUrl: './parque.page.html',
  styleUrls: ['./parque.page.scss'],
})
export class ParquePage implements OnInit {

  constructor(public modalController: ModalController) {}

   

  async ngOnInit() {
    const modal = await this.modalController.create({
      component:ModalBienvenidoPage,
      componentProps: { value: 123 }
    });
    return await modal.present();
  }
locali:string;


parques=[
  {
    localidad : "Engativa",
    parque : "la clara",
    
  },

  {
    localidad : "Engativa",
    parque : "Brasilia",
    
  },
  {
    localidad : "Chapinero",
    parque : "Los Hippes",
    
  },
  {
    localidad : "Chapinero",
    parque : "Lima",
   
  },
  {
    localidad : "Kennedy",
    parque : "Caracas",
    
  },
]

async busquedalocalidad(){
   
  }
}
