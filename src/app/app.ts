import { Component, inject, signal } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { APP_IMPORTS } from '@src/app/app.imports';
import { MatIconRegister } from '@src/app/services/mat-icon-register';

type CustomIcon = {
  name:string,
  path:string
}

@Component({
  selector: 'app-root',
  imports: APP_IMPORTS,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
  private matIconRegister = inject(MatIconRegister);
  private iconExt:string = 'svg'
  private icons: Array<CustomIcon> = [
    {name:"GitHub", path:'icons/github'},
  ];

  constructor() {
    this.registerIcons();
  }

  registerIcons() {
    this.icons.forEach(({name,path})=>{
      this.matIconRegister.addIcon(name.toLowerCase(),inject(DomSanitizer).bypassSecurityTrustResourceUrl(`${path}.${this.iconExt}`));
    });
  }
}
