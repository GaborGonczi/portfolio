//type
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { IMPORT_TYPE } from '@src/angular/types';

// core

const PROFESSIONAL_INFO_CORE_IMPORTS:IMPORT_TYPE=[
    MatListModule,
    MatIconModule
 
];


//feature



const PROFESSIONAL_INFO_FEATURE_IMPORTS:IMPORT_TYPE=[

];

export const PROFESSIONAL_INFO_IMPORTS:IMPORT_TYPE=[...PROFESSIONAL_INFO_CORE_IMPORTS,...PROFESSIONAL_INFO_FEATURE_IMPORTS] as const;