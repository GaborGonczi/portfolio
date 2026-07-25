import { inject, Service } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Service()
export class CvSource {
  private cv = inject(DomSanitizer).bypassSecurityTrustResourceUrl(
    'cv/cv.pdf#toolbar=0&navpanes=0',
  );
  getCv() {
    return this.cv;
  }
}
