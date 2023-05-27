//Recordemos que esto no es más que una simple clase con un decorador

import { Component } from '@angular/core';

@Component({
    selector: 'app-heroes-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.css']
})
export class HeroComponent {
    public name: string = 'Spiderman'
    public age: number = 22;

    //Esto se podría hacer con un pipe
    get capitalize(): string {
        return this.name.toUpperCase();
    }

    getHeroAttack(): string {
        return 'Hyah! Hah! Haaaaah!'
    }

    changeHero(name: string): void {
        this.name = name;
    }

    changeAge(age: number): void {
        this.age = age;
    }

    resetForm(): void {
        this.name = 'Spiderman';
        this.age = 22;
    }
}
