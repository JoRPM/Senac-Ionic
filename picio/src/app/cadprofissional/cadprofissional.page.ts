import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadprofissional',
  templateUrl: './cadprofissional.page.html',
  styleUrls: ['./cadprofissional.page.scss'],
})
export class CadprofissionalPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  enviar(){
    alert("Cadastrado com sucesso!")
  }
}
