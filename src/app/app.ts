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
    {name:"HTML", path:'icons/html'},
    {name:"CSS", path:'icons/css'},
    {name:"JavaScript", path:'icons/js'},
    {name:"Angular", path:'icons/angular'},
    {name:"PHP", path:'icons/php'},
    {name:"Laravel", path:'icons/laravel'},
    {name:"SQL", path:'icons/sql'},
    {name:"Git", path:'icons/git'},
    {name:"GitHub", path:'icons/github'},
    {name:"Docker", path:'icons/docker'},
    {name:"Moodle", path:'icons/moodle'},
    {name:"Totara", path:'icons/lms'},
    {name:"Django", path:'icons/django'},
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
