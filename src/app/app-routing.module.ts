import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListCategoriasComponent} from '../app/Components/Categoria/list-categorias/list-categorias.component';

const routes: Routes = [
  {
  path : 'categorias/listcategorias',component: ListCategoriasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
