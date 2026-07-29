import { MatCardModule } from '@angular/material/card';
import { IMPORT_TYPE } from '@src/angular/types';


const PERSONAL_INFO_CORE_IMPORTS:IMPORT_TYPE=[
    MatCardModule
 
];
const PERSONAL_INFO_FEATURE_IMPORTS:IMPORT_TYPE=[

];

export const PERSONAL_INFO_IMPORTS:IMPORT_TYPE=[...PERSONAL_INFO_CORE_IMPORTS,...PERSONAL_INFO_FEATURE_IMPORTS] as const;