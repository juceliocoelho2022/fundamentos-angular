import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exemplo-servicos1',
  templateUrl: './exemplo-servicos1.component.html',
  styleUrls: ['./exemplo-servicos1.component.css']
})
export class ExemploServicos1Component  {
    
  nome = "";
  
  adicionarNome(){
    console.log(`O nome ${this.nome} foi adicionado`);
  }
}
