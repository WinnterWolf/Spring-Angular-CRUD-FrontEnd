import { Component, OnInit } from '@angular/core';
import{Usuario} from '../usuario';
import {ActivatedRoute, Router} from '@angular/router';
import {UsuarioService} from '../usuario.service'; 

@Component({
  selector: 'app-update-usuario',
  templateUrl: './update-usuario.component.html',
  styleUrls: ['./update-usuario.component.css']
})
export class UpdateUsuarioComponent implements OnInit {

  id:number;
  usuario:Usuario;
  submitted=false;

  constructor(private route: ActivatedRoute, private router: Router,
    private usuarioService: UsuarioService) { }

  ngOnInit(){
    this.usuario = new Usuario;
    this.id = this.route.snapshot.params['id'];

    let data =this.usuarioService.getUsuario(this.id);
    data.then(data=>{
              console.log(data)
              this.usuario = data
            },
            error => console.log(error)
      );
    
  }
  
  updateUsuario(){
    let update = this.usuarioService.updateUsuario(this.id, this.usuario);
    
    update.then(data=>{
              console.log(data)
              this.usuario = new Usuario;
              this.goToList(); 
            },
            error => console.log(error)
      );
  }

  onSubmit(){
    this.updateUsuario();
  }

  goToList(){
    this.router.navigate(['/usuarios']);
  }

}
