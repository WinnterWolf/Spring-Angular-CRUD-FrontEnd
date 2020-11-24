import { CreateUsuarioComponent } from './create-usuario/create-usuario.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UpdateUsuarioComponent } from './update-usuario/update-usuario.component';

const routes: Routes = [
  { path: '', redirectTo: 'usuarios', pathMatch: 'full' },
  { path: 'usuarios', component: UsuarioListComponent },
  { path: 'add', component: CreateUsuarioComponent },
  { path: 'update/:id', component: UpdateUsuarioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }