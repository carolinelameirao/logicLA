import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { ClientesComponent } from './clientes/clientes.component';
import { CadastroComponent } from './cadastro/cadastro.component';

import { SharedModule } from '../shared/shared.module';
import { AtualizaComponent } from './atualiza/atualiza.component';
import { RouterLink } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    HomeComponent,
    ClientesComponent,
    CadastroComponent,
    AtualizaComponent
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    RouterLink,
    BrowserModule,
    FormsModule
  ],
  exports: [
    ClientesComponent,
    CadastroComponent
  ]
})
export class PaginasModule { }
