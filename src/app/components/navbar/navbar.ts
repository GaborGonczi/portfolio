import { Component } from '@angular/core';
import { NAVBAR_IMPORTS } from '@src/app/components/navbar/navbar.imports';

@Component({
  selector: 'app-navbar',
  imports: NAVBAR_IMPORTS,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {}
