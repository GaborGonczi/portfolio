import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import { IMPORT_TYPE } from '@src/angular/types';


const NAVBAR_CORE_IMPORTS:IMPORT_TYPE=[
    MatToolbarModule,
    MatButtonModule,
    RouterOutlet
];
const NAVBAR_FEATURE_IMPORTS:IMPORT_TYPE=[

];

export const NAVBAR_IMPORTS:IMPORT_TYPE=[...NAVBAR_CORE_IMPORTS,...NAVBAR_FEATURE_IMPORTS] as const;