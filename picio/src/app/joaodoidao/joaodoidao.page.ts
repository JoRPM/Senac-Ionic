import { Component, OnInit, HostListener, } from '@angular/core';

@Component({
  selector: 'app-joaodoidao',
  templateUrl: './joaodoidao.page.html',
  styleUrls: ['./joaodoidao.page.scss'],
})
export class JoaodoidaoPage implements OnInit {
  private pais;

  constructor() { 
    this.pais = [
      {"nome" : "Brasil","cont":"América", "color": "primary"},
      {"nome" : "Argentina","cont":"América", "color": "secondary"},
      {"nome" : "João Doente","cont":"Sei lá", "color": "danger"},
      {"nome" : "A professora não veio","cont":"Ela ficou dodoí", "color": "light"},
      {"nome" : "A aula foi com o Rafael","cont":"na mesma sala, mas começamos as 09:30 a aula", "color": "dark"},
      {"nome" : "Não esse que senta do seu lado","cont":"Ele é legal", "color": "primary"},
      {"nome" : "Com o coordenador do curso","cont":"O que fica com medo de maluco", "color": "secondary"},
      {"nome" : "O rafael que senta do seu lado","cont":"Gente boa de novo", "color": "danger"},
      {"nome" : "Sofreu para fazer as coisas dele funcionar hoje","cont":"Virou você", "color": "dark"}
    ]
   }

  ngOnInit() {
  }

  buttonClick(){
    alert("AVIÃO É MOLHOR QUE CARRO... TUDO QUE VOCÊS USAM, NÓS CRIAMOS... ")
    alert("Rafael é gente boa!!!!")
  }

  /*@HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }*/

}
