import { Component } from '@angular/core';
import { FOOTER_IMPORTS } from '@src/app/components/footer/footer.imports';

@Component({
  selector: 'app-footer',
  imports: FOOTER_IMPORTS,
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {}
