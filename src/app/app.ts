import { Component, inject, signal } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { APP_IMPORTS } from '@src/app/app.imports';
import { MatIconRegister } from '@src/app/services/mat-icon-register';

@Component({
  selector: 'app-root',
  imports: APP_IMPORTS,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
  private matIconRegister = inject(MatIconRegister);

  constructor() {
    this.registerIcons();
  }

  registerIcons() {
    this.matIconRegister.addIcon(
      'github_logo',
      inject(DomSanitizer).bypassSecurityTrustResourceUrl(
      'github-icon.svg'
      ),

    );
  }
}
