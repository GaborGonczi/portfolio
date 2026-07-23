//type
import { IMPORT_TYPE } from '@src/angular/types';

// core
import { RouterOutlet } from '@angular/router';

//feature
import { PersonalInfo } from '@src/app/components/home-page/components/personal-info/personal-info';
import { ProfessionalInfo } from '@src/app/components/home-page/components/professional-info/professional-info';

const HOME_PAGE_CORE_IMPORTS:IMPORT_TYPE=[
    RouterOutlet
];
const HOME_PAGE_FEATURE_IMPORTS:IMPORT_TYPE=[
    //components
    PersonalInfo,
    ProfessionalInfo
];

export const HOME_PAGE_IMPORTS:IMPORT_TYPE=[...HOME_PAGE_CORE_IMPORTS,...HOME_PAGE_FEATURE_IMPORTS] as const;