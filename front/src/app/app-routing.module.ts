import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriarUsuarioComponent } from './components/usuario/criar-usuario/criar-usuario.component';

const routes: Routes = [
  {
    path: 'usuario/criar',
    component: CriarUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
