import { Component } from '@angular/core';
import { HOME_PAGE_IMPORTS } from '@src/app/components/home-page/home-page.imports';

@Component({
  selector: 'app-home-page',
  imports: HOME_PAGE_IMPORTS,
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {}
