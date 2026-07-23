import { Component } from '@angular/core';
import { PROFESSIONAL_INFO_IMPORTS } from '@src/app/components/home-page/components/professional-info/professional-info.imports';

type ProfessionalInfoListItem = {
  name:string,
  icon:string
}

@Component({
  selector: 'app-professional-info',
  imports: PROFESSIONAL_INFO_IMPORTS,
  templateUrl: './professional-info.html',
  styleUrl: './professional-info.css',
})
export class ProfessionalInfo {

  public mainStack:Array<ProfessionalInfoListItem> = [
    {name:"HTML", icon:'html'},
    {name:"CSS", icon:'css'},
    {name:"JavaScript", icon:'javascript'},
    {name:"Angular", icon:'angular'},
    {name:"PHP", icon:'php'},
    {name:"Laravel", icon:'laravel'},
    {name:"SQL", icon:'sql'},

  ];
  public additionalTechnologies:Array<ProfessionalInfoListItem> = [
    {name:"Git", icon:'git'},
    {name:"GitHub", icon:'github'},
    {name:"Docker", icon:'docker'},
    {name:"Moodle", icon:'moodle'},
    {name:"Totara", icon:'totara'},
    {name:"Django", icon:'django'},

  ];
  
  

}
