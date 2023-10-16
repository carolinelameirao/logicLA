import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Cliente } from 'src/app/model/cliente';
import { DatabaseService } from 'src/app/service/database.service';

@Component({
  selector: 'app-atualiza',
  templateUrl: './atualiza.component.html',
  styleUrls: ['./atualiza.component.css']
})
export class AtualizaComponent implements OnInit {
  nameButton = "Editar";

  routerId = null;

  meusClientes: Cliente[] = [];
  cliente: any = [];

  form!: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataBaseService: DatabaseService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.routerId = this.activatedRoute.snapshot.params['id'];

    if(this.routerId) {
      this.dataBaseService.getClienteId(this.routerId).subscribe(results => this.cliente = results);
    }
  }

  atualizar(form: any): void {
    try {
      this.dataBaseService.updateCliente(form.value,this.cliente.id);
      this.router.navigate(['/clientes/']);
    } catch (err) {
      console.error(err);
    }
  }
}
