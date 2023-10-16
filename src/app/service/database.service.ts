import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  readonly API = 'http://localhost:3000/clientes/'

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private httpClient: HttpClient) { }

  getCliente() {
    return this.httpClient.get<Cliente[]>(this.API);
  }

  getClienteId(id: number) {
    return this.httpClient.get<Cliente[]>(this.API + id);
  }

  postCliente(dados: Cliente) {
    return this.httpClient.post(this.API, JSON.stringify(dados), this.httpOptions).subscribe();
  }

  deleteCliente(id: number) {
    return this.httpClient.delete(this.API + id);
  }

  updateCliente(dados: any, id: any) {
    return this.httpClient.put(this.API + id, JSON.stringify(dados), this.httpOptions).subscribe();
  }
}
