import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-usuario',
  templateUrl: './criar-usuario.component.html',
  styleUrls: ['./criar-usuario.component.scss']
})
export class CriarUsuarioComponent implements OnInit {

  propLegal = "qualquer";

  constructor() { }

  ngOnInit(): void {
  }

  fazerAlgo(): void {
    console.log('fazer algo')
  }

}
