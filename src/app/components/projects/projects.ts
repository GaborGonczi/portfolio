import { Component } from '@angular/core';
import { PROJECTS_IMPORTS } from '@src/app/components/projects/projects.imports';
import { MatAnchor } from "@angular/material/button";

type ProjectListItem = {
  name:string,
  description:string,
  demoUrl:string,
  githubUrl:string
}

@Component({
  selector: 'app-projects',
  imports: PROJECTS_IMPORTS ,
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {

public projectArray:Array<ProjectListItem> = [
    {
      name:'Halmazelméleti tananyagkészítő alkalmazás',
      description:'Ezzel az a középiskola 9. évfolyamán oktatott halmazelméleti témakörhöz lehet oktatóanyagot készíteni.',
      demoUrl:'https://set-theory-at.infosolutions.hu',
      githubUrl:'https://github.com/GaborGonczi/set-theory-authoring-tool'
    }

]

}
