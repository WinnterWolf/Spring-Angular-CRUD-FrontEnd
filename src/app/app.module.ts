import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateUsuarioComponent } from './create-usuario/create-usuario.component';
import { UsuarioDetailsComponent } from './usuario-details/usuario-details.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UpdateUsuarioComponent } from './update-usuario/update-usuario.component';
import { HttpClientModule } from '@angular/common/http';

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
    AppRoutingModule,
    FormsModule,
    HttpClientModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
