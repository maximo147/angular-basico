import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ titulo }}</h1>
    <h3>
      La base es: <strong>{{ base }}</strong>
    </h3>
    <button (click)="acumular(base)">+{{ base }}</button>
    <span>{{ valor }}</span>
    <button (click)="acumular(-base)">-{{ base }}</button>
  `,
})
export class ContadorComponent {
    public titulo: string = 'Contador App';
    public valor: number = 0;
    public base: number = 2
    public acumular( valor: number ){
      this.valor += valor; 
    }
}
