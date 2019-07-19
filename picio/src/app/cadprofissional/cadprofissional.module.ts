import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CadprofissionalPage } from './cadprofissional.page';

const routes: Routes = [
  {
    path: '',
    component: CadprofissionalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CadprofissionalPage]
})
export class CadprofissionalPageModule {}
