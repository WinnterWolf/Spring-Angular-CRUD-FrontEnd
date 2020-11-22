import { Component, OnInit } from '@angular/core';
import {UsuarioDetailsComponent} from 'src/app/usuario-details.component';
import {Observable} from "rxjs";
import {UsuarioService} from "../usuario.service";
import {Usuario} from "../usuario";
import {Router} from '@angular/router';


@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {
  usuarios: Observable<Usuario[]>;

  constructor(private usuarioService: UsuarioService,
    private router: Router) { }

  ngOnInit(){
    this.reloadData();
  }

reloadData(){
  this.usuarios=this.usuarioService.getUsuarioList();
}

deleteUsuario (id: number){
  this.usuarioService.deleteUsuario(id)
  .subscribe(
    data=>{
      console.log(data)
      this.reloadData();
    },
    error => console.log(error)
  );
}
usuarioDetails(id: number){
  this.router.navigate(['details', id]);
}

updateUsuario(id: number){
  this.router.navigate(['update', id]);
}
}
