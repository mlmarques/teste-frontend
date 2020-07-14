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

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  cadastrarUsuario(): void {
    this.usuarioService.criarUsuario(this.usuario)
  }

}
