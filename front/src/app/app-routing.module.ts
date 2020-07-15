import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriarUsuarioComponent } from './components/usuario/criar-usuario/criar-usuario.component';
import { ListarUsuarioComponent } from './components/usuario/listar-usuario/listar-usuario.component';

const routes: Routes = [
  {
    path: 'usuario/criar',
    component: CriarUsuarioComponent
  },
  {
    path: 'usuario/criar/:cpf',
    component: CriarUsuarioComponent
  },
  {
    path: 'usuario/listar',
    component: ListarUsuarioComponent
  },
  {
    path: '',
    component: ListarUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
