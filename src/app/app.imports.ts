//type
import { IMPORT_TYPE } from '@src/angular/types';

// core
import { RouterOutlet } from '@angular/router';

//feature
import { Navbar } from '@src/app/components/navbar/navbar';
import { Footer } from '@src/app/components/footer/footer';

const APP_CORE_IMPORTS:IMPORT_TYPE=[
    RouterOutlet
];
const APP_FEATURE_IMPORTS:IMPORT_TYPE=[
    //components
    Navbar,
    Footer
];

export const APP_IMPORTS:IMPORT_TYPE=[...APP_CORE_IMPORTS,...APP_FEATURE_IMPORTS] as const;