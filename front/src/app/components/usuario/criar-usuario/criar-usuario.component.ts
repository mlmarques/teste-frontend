import { Component, OnInit } from '@angular/core';

import { Usuario } from './../usuario.model';
import { UsuarioService } from './../usuario.service'

@Component({
  selector: 'app-criar-usuario',
  templateUrl: './criar-usuario.component.html',
  styleUrls: ['./criar-usuario.component.scss']
})
export class CriarUsuarioComponent implements OnInit {

  usuario: Usuario = {
    cpf: null,
    name: '',
    phone: null,
    email: '',
  }

  // usuario: Usuario = {
  //   cpf: 46970120899,
  //   name: 'Matheus Marques Luiz',
  //   phone: 13991977273,
  //   email: 'marquesluiz.matheus@gmail.com',
  // }

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  cadastrarUsuario(): void {
    this.usuarioService.criarUsuario(this.usuario)
  }

}
