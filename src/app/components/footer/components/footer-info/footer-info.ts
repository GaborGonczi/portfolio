import { Component } from '@angular/core';
import { FOOTER_INFO_IMPORTS } from '@src/app/components/footer/components/footer-info/footer-info.imports';

@Component({
  selector: 'app-footer-info',
  imports:FOOTER_INFO_IMPORTS,
  templateUrl: './footer-info.html',
  styleUrl: './footer-info.css',
})
export class FooterInfo {}
