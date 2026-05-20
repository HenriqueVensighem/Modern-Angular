import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
      import { Hello } from "./hello/hello";
import { Header } from './header/header';
import { ProductsGrids } from './products/products-grids/products-grids';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, ProductsGrids],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('modern-angular');
}
