import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent {
    public nombre: string = 'Iron Man';
    public edad: number = 45;
    public obtenerNombre(): string {
        return `${this.nombre} - ${this.edad}` 
    }

    public setNombre(nombre: string){
        this.nombre = nombre;
    }

    public get getNombre(): string{
        return this.nombre.toUpperCase();
    }

    public cambiarNombre(): void {
        this.nombre = 'Spiderman';
    }

    public cambiarEdad(): void {
        this.edad = 50
    }

}