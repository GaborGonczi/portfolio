//type
import { IMPORT_TYPE } from '@src/angular/types';

// core
import { RouterOutlet } from '@angular/router';
import { Navbar } from '@src/app/components/navbar/navbar';

const APP_CORE_IMPORTS:IMPORT_TYPE=[
    RouterOutlet
];
const APP_FEATURE_IMPORTS:IMPORT_TYPE=[
    Navbar
];

export const APP_IMPORTS:IMPORT_TYPE=[...APP_CORE_IMPORTS,...APP_FEATURE_IMPORTS] as const;