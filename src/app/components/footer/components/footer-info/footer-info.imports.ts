import { MatIconModule } from '@angular/material/icon';
import { IMPORT_TYPE } from '@src/angular/types';

const FOOTER_INFO_CORE_IMPORTS:IMPORT_TYPE=[
    MatIconModule
];
const FOOTER_INFO_FEATURE_IMPORTS:IMPORT_TYPE=[
];

export const FOOTER_INFO_IMPORTS:IMPORT_TYPE=[...FOOTER_INFO_CORE_IMPORTS,...FOOTER_INFO_FEATURE_IMPORTS] as const;