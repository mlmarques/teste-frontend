import { Component, OnInit } from '@angular/core';

import { Usuario } from './../usuario.model';
import { UsuarioService } from './../usuario.service'

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.scss']
})
export class ListarUsuarioComponent implements OnInit {

  usuarios: Usuario[];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    // this.usuarioService.consumirDadosIniciais().subscribe(usuarios => {
    //   this.usuarios = usuarios;
    // })

    // -----------------------------------------------------------------
    this.usuarioService.setDadosIniciar();
    this.usuarios = this.usuarioService.getListaUsuarios();
    console.log(this.usuarioService.getUsuarioPorCpf(this.usuarios[0].cpf));
  }

  editarUsuario(cpf: number): void{
    console.log(this.usuarioService.getUsuarioPorCpf(cpf));
  }

  excluirUsuario(cpf: number): void{
    this.usuarioService.deleteUsuario(cpf);
    this.atualizarDados();
  }

  atualizarDados(): void{
    this.usuarios = this.usuarioService.getListaUsuarios();
  }

}
