import { Component } from '@angular/core';
import { Componente1Component } from './componente1/componente1.component';
import { Componente2Component } from './componente2/componente2.component';
import { Componente3Component } from './componente3/componente3.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Componente1Component, Componente2Component,Componente3Component],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sitio-angular'; 
}
