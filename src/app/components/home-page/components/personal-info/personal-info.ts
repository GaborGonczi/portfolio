import { Component } from '@angular/core';
import { PERSONAL_INFO_IMPORTS } from '@src/app/components/home-page/components/personal-info/personal-info.imports';

@Component({
  selector: 'app-personal-info',
  imports: PERSONAL_INFO_IMPORTS,
  templateUrl: './personal-info.html',
  styleUrl: './personal-info.css',
})
export class PersonalInfo {}
