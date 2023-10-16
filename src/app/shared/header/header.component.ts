import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  logo = "https://cdn.pixabay.com/photo/2014/04/03/10/23/pallet-transporter-310303_1280.png";

  menu1 = "LogicLA";
  menu2 = "Home";
  menu3 = "Clientes";
  menu4 = "Cadastro";

}
