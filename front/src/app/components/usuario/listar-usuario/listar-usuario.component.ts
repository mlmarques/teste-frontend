import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

import { Usuario } from './../usuario.model';
import { UsuarioService } from './../usuario.service'

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.scss']
})
export class ListarUsuarioComponent implements OnInit {

  usuarios: Usuario[];

  constructor(private router: Router, private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.buscarUsuarios();
    this.atualizarDados();
  }

  editarUsuario(cpf: number): void{
    this.router.navigate([`usuario/criar/${cpf}`]);
  }

  excluirUsuario(cpf: number): void{
    this.usuarioService.deleteUsuario(cpf);
    this.atualizarDados();
  }

  atualizarDados(): void{
    this.usuarios = this.usuarioService.getListaUsuarios();
  }

}
