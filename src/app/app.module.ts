import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HolaMundoComponent } from 'primercomponente/primer.componente';
import { NombreComponent } from 'primercomponente/primer.componente';

@NgModule({
  declarations: [
    AppComponent,
    HolaMundoComponent,
    NombreComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
