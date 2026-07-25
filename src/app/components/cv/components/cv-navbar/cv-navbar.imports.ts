import { IMPORT_TYPE } from '@src/angular/types';
import { MatButtonModule } from '@angular/material/button';

const CV_NAVBAR_CORE_IMPORTS:IMPORT_TYPE=[
    MatButtonModule
];
const CV_NAVBAR_FEATURE_IMPORTS:IMPORT_TYPE=[
    
];

export const CV_NAVBAR_IMPORTS:IMPORT_TYPE=[...CV_NAVBAR_CORE_IMPORTS,...CV_NAVBAR_FEATURE_IMPORTS] as const;