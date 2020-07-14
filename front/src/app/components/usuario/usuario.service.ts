import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Usuario } from './usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuarios: Usuario[];

  url = "https://private-21e8de-rafaellucio.apiary-mock.com/users";

  constructor(private http: HttpClient) {}  

  criarUsuario(usuario: Usuario): void{
    console.log(usuario);
  }

  buscarUsuarios(): any {
  }

  consumirDadosIniciais(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.url);
  } 

  setDadosIniciar(): void{
    this.consumirDadosIniciais().subscribe(usuarios => {
      this.criarStorage(usuarios);
    })
  }

  getListaUsuarios(): any{
    return JSON.parse(localStorage.getItem('usuarios'));
  }

  getUsuarioPorCpf(cpf: number): any{
    return this.getListaUsuarios().find(el => el.cpf === cpf);
  }

  createUsuario(usuario: Usuario): void{
    this.getListaUsuarios().push(usuario);
  }
  
  deleteUsuario(cpf: number): void{
    let novaLista = this.getListaUsuarios().splice(1, this.getListaUsuarios().map(el => {return el.cpf}).indexOf(cpf));
    this.limparStorage();
    this.criarStorage(novaLista);
  }

  limparStorage(): void{
    localStorage.removeItem('usuarios');
  }

  criarStorage(usuarios: Usuario[]): void{
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
  }
}
