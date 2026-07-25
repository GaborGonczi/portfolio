import { Component, inject } from '@angular/core';
import { CV_NAVBAR_IMPORTS } from '@src/app/components/cv/components/cv-navbar/cv-navbar.imports';
import { CvSource } from '@src/app/components/cv/services/cv-source';

@Component({
  selector: 'app-cv-navbar',
  imports: CV_NAVBAR_IMPORTS,
  templateUrl: './cv-navbar.html',
  styleUrl: './cv-navbar.css',
})
export class CvNavbar {
  cvSource = inject(CvSource)
}
