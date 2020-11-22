import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateUsuarioComponent } from './create-usuario/create-usuario.component';
import { UsuarioDetailsComponent } from './usuario-details/usuario-details.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UpdateUsuarioComponent } from './update-usuario/update-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateUsuarioComponent,
    UsuarioDetailsComponent,
    UsuarioListComponent,
    UpdateUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
