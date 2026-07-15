import { Component, signal } from '@angular/core';
import {APP_IMPORTS} from './app.imports'

@Component({
  selector: 'app-root',
  imports: APP_IMPORTS,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
