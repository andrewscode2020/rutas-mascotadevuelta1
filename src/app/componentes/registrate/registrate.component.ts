import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-registrate',
  templateUrl: './registrate.component.html',
  styleUrls: ['./registrate.component.scss']
})
export class RegistrateComponent implements OnInit {
  
  userRegistrationForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService
  ) { 
    this.userRegistrationForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: [''],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  registerUser () {
    // console.log('this.userRegistrationForm ', this.userRegistrationForm.valid)

    if (this.userRegistrationForm.valid) {
      this.usersService.saveUser(this.userRegistrationForm.value)
      .subscribe(
        (res) => {
          console.log('Usuario registrado exitosamente ', res)
        },
        (error) => {
          console.error('Error al registrar usuario ', error)
        }
      )
    }
  }

}

/*
  ngOnInit(): void {
  }

  registrarUsuario () {
    console.log('this.formularioDeRegistro ', this.formularioDeRegistro)

    if ( this.formularioDeRegistro.valid ) {
      this.clienteService.registrarCliente(this.formularioDeRegistro.value)
        .subscribe(
          (respuesta) => { // Si todo sale bien
            console.log('Exito al registrar el cliente ', respuesta)
          },
          (error) => {// Si algo sale mal
            console.error('Error registrando cliente: ', error)

            const campos = Object.keys(error.error.errors)

            campos.forEach((campo) => {
              alert(error.error.errors[campo].message)
            })
          }
        )
    }

    document.querySelector('form').classList.add('was-validated')
  }

}
*/