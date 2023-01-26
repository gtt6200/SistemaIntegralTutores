import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Librería para hacer uso de los formularios de angular
import { FormsModule } from "@angular/forms";
import { HttpClient, HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
//importamos el archivo app.routing.ts
import { routing } from "./app.routing";

/// Este archivo contiene la configuración inicial de todos los componentes y sus rutas

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    //importamos las librerías añadidas
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
