import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Cliente } from '../../model/cliente';
import { DatabaseService } from 'src/app/service/database.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  nameButton = "Maiores de Sessenta";
  nomeButton = "Excluir";
  button = "Atualizar";

  control = true;

  clientes: Cliente[] = [];

  constructor(
    private dataBaseService: DatabaseService,
    private router: Router
  ) { }

  ngOnInit(): void {
    try {
      this.dataBaseService.getCliente().subscribe(results => this.clientes = results);
    } catch (err) {
      console.error(err);
    }
  }

  maioresSessenta() {
    this.control = !this.control;

    if(this.nameButton == "Todos") {
      this.nameButton = "Maiores de Sessenta";
    }  else {
      this.nameButton = "Todos";
    }
  }
  
  deletar(id: number) {
      this.dataBaseService.deleteCliente(id).subscribe({
        next: () => {
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.error(err);
        }
      });
  }
}
