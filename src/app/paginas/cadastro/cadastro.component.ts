import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { DatabaseService } from 'src/app/service/database.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  nameButton = "Cadastrar";

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dataBaseService: DatabaseService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.validaForm();
  }

  validaForm() {
    this.form = this.formBuilder.group({
      nome: ['', [Validators.required]],
      sobrenome: ['', [Validators.required]],
      cpf: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      idade: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]],
      logradouro: ['', [Validators.required]],
      numero: ['', [Validators.required, Validators.maxLength(10)]],
      complemento: ['', [Validators.required]],
      bairro: ['', [Validators.required]],
      cidade: ['', [Validators.required]],
      estado: ['', [Validators.required]],
      cep: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]]
    });
  }

  cadastrar() {
    this.dataBaseService.postCliente(this.form.value);
    this.router.navigate(['/clientes/']);
  }
}
