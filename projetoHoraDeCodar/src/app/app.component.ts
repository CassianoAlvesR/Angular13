import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userName = "joaquim";

  userData = {
    idade: 13,
    job: "programador",

  }

  title = 'projetoHoraDeCodar';
}

