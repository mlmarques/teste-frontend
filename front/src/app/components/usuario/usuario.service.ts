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

  buscarUsuarios(): any {
    if(this.getListaUsuarios() === null || this.getListaUsuarios().length < 1){
      this.limparStorage();
      this.setDadosIniciar();
    }
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
    return this.getListaUsuarios().find(el => parseInt(el.cpf) === cpf);
  }

  createUsuario(usuario: Usuario): void{
    let novaLista = this.getListaUsuarios();
    novaLista.push(usuario);
    this.limparStorage();
    this.criarStorage(novaLista);
  }
  
  updateUsuario(usuario: Usuario): void{
    let novaLista = this.getListaUsuarios();
    let index = this.getListaUsuarios().map(el => {return el.cpf}).indexOf(usuario.cpf);
    novaLista[index] = usuario;
    this.limparStorage();
    this.criarStorage(novaLista);
  }

  deleteUsuario(cpf: number): void{
    let index = this.getListaUsuarios().map(el => {return el.cpf}).indexOf(cpf);
    let novaLista = this.getListaUsuarios();
    novaLista.splice(index, 1);
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
