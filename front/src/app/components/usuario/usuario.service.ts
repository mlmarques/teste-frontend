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

  buscarUsuarios(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.url);
  } 
  
}
