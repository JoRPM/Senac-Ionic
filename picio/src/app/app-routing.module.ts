import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { 
    path: 'cadcarro',
    loadChildren: './cadcarro/cadcarro.module#CadcarroPageModule'
  },
  { 
    path: 'joaodoidao',
    loadChildren: './joaodoidao/joaodoidao.module#JoaodoidaoPageModule'
  },
  { path: 'cad-cliente', loadChildren: './cad-cliente/cad-cliente.module#CadClientePageModule' },
  { path: 'cadprofissional', loadChildren: './cadprofissional/cadprofissional.module#CadprofissionalPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
