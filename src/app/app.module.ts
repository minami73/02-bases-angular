import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Conforme vayamos teniendo más componentes, no es buena idea agruparlos en un solo lugar
import { CounterModule } from './counter/counter.module';

import { AppComponent } from './app.component';
import { DbzModule } from './dbz/dbz.module';
import { HeroesModule } from './heroes/heroes.module';


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        CounterModule,
        HeroesModule,
        DbzModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
