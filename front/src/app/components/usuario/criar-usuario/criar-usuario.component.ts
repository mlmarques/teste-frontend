import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 

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

  constructor(private route: ActivatedRoute, private router: Router, private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.verificarAcao();
  }

  verificarAcao(){
    let cpfSelecionado = this.route.snapshot.paramMap.get('cpf');
    if(cpfSelecionado !== null){
      this.usuario = this.usuarioService.getUsuarioPorCpf(parseInt(cpfSelecionado));
    }
  }

  finalizar(): void {
    let cpfSelecionado = this.route.snapshot.paramMap.get('cpf');
    if(cpfSelecionado !== null){
      this.usuarioService.updateUsuario(this.usuario);
      this.router.navigate([`usuario/listar`]);
    }else{
      this.usuarioService.createUsuario(this.usuario);
      this.router.navigate([`usuario/listar`]);
    }
  }

}
