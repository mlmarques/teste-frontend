import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Usuario } from './usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = "https://private-21e8de-rafaellucio.apiary-mock.com/users";

  constructor(private httpClient: HttpClient) {}  

  criarUsuario(usuario: Usuario): void{
    console.log(usuario)
  }
  
}
