import { MatToolbarModule } from '@angular/material/toolbar';
import { IMPORT_TYPE } from '@src/angular/types';
import { FooterInfo } from '@src/app/components/footer/components/footer-info/footer-info';



const FOOTER_CORE_IMPORTS:IMPORT_TYPE=[
    MatToolbarModule,
];
const FOOTER_FEATURE_IMPORTS:IMPORT_TYPE=[
    FooterInfo
];

export const FOOTER_IMPORTS:IMPORT_TYPE=[...FOOTER_CORE_IMPORTS,...FOOTER_FEATURE_IMPORTS] as const;