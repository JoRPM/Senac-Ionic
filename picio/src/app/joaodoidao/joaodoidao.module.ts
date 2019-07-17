import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { JoaodoidaoPage } from './joaodoidao.page';

const routes: Routes = [
  {
    path: '',
    component: JoaodoidaoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [JoaodoidaoPage]
})
export class JoaodoidaoPageModule {}
