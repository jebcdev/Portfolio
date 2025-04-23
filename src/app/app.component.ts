import { Component, OnInit } from '@angular/core';
import {
  ContentComponent,
  FooterComponent,
  HeaderComponent,
} from './components';
import { HSStaticMethods } from 'preline/preline';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, ContentComponent, FooterComponent],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    // Inicializar PrelineUI
    window.addEventListener('load', () => {
      HSStaticMethods.autoInit();
    });
  }
  title = 'portfolio-preline-app';
}
