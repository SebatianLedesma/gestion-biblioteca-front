import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {

  usuario : Usuario = new Usuario();
  constructor(private usuarioServicio:UsuarioService, private router:Router) { }

  ngOnInit(): void {
  }

  guardarUsuario(){
    this.usuarioServicio.registrarUsuario(this.usuario).subscribe(dato => {
      console.log(dato);
      this.irAListaDeUsuarios();
    });
  }

  irAListaDeUsuarios(){
    this.router.navigate(['/usuarios'])
  }

  onSubmit(){
    this.guardarUsuario();
  }

}
