import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  saveUser(userInfo = {}) {
    return this.http.post('http://localhost:3000/users', userInfo)
  }
}

/*
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  registrarCliente(datosCliente = {}) {
    return this.http.post('http://localhost:3000/clientes', datosCliente)
  }

}
*/