import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalBienvenidoPage } from './modal-bienvenido.page';

const routes: Routes = [
  {
    path: '',
    component: ModalBienvenidoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalBienvenidoPage]
})
export class ModalBienvenidoPageModule {}
