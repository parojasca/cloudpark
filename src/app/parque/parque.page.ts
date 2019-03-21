import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalBienvenidoPage } from '../modal-bienvenido/modal-bienvenido.page';
import { AlertController } from '@ionic/angular';
  

@Component({
  selector: 'app-parque',
  templateUrl: './parque.page.html',
  styleUrls: ['./parque.page.scss'],
})
export class ParquePage implements OnInit {

  constructor(public alertController: AlertController) {}

   

  async ngOnInit() {
    const alert = await this.alertController.create({
      header: 'Bienvenido',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['Siguiente']
    });

    await alert.present();
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


}
