import { Component, OnInit } from '@angular/core';
import {Usuario} from '../usuario';
import {UsuarioService} from '../usuario.service';
//import {UsuarioListComponent} from '../usuario-list.component';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-usuario-details',
  templateUrl: './usuario-details.component.html',
  styleUrls: ['./usuario-details.component.css']
})
export class UsuarioDetailsComponent implements OnInit {

  id:number;
  usuario:Usuario;

  constructor(private route: ActivatedRoute, private router: Router,
    private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuario = new Usuario();
    this.id = this.route.snapshot.params['id'];

    this.usuarioService.getUsuario(this.id)
    .subscribe (data =>{
      console.log(data)
      
    }, error => console.log(error));
  }
  list(){
    this.router.navigate(['usuarios']);
  }

}
