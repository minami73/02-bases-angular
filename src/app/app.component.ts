//Este es el corazón del componente, el componente principal
//Recordemos que lo que tenemos en TS es un simple archivo comun y corriente que contiene una clase
//Con el decorador que transforma la clase en un componente

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})

export class AppComponent {
    public title: string = 'Hola Mundo';

}
