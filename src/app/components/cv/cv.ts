import { Component, inject } from '@angular/core';
import { CV_IMPORTS } from '@src/app/components/cv/cv.imports';
import { CvSource } from '@src/app/components/cv/services/cv-source';

@Component({
  selector: 'app-cv',
  imports: CV_IMPORTS,
  templateUrl: './cv.html',
  styleUrl: './cv.css',
})
export class Cv {
  cvSource = inject(CvSource)
}
