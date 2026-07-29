import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { IMPORT_TYPE } from '@src/angular/types';


const PROJECTS_CORE_IMPORTS:IMPORT_TYPE=[
    MatCardModule,
    MatIconModule
 
];
const PROJECTS_FEATURE_IMPORTS:IMPORT_TYPE=[

];

export const PROJECTS_IMPORTS:IMPORT_TYPE=[...PROJECTS_CORE_IMPORTS,...PROJECTS_FEATURE_IMPORTS] as const;