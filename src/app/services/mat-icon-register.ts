import { inject, Service } from '@angular/core';
import { IconOptions, MatIconRegistry } from '@angular/material/icon';
import { SafeResourceUrl } from '@angular/platform-browser';

@Service()
export class MatIconRegister {
    private originalService=inject(MatIconRegistry);

    addIcon(name:string,url:SafeResourceUrl,options?:IconOptions) {
        this.originalService.addSvgIcon(name,url,options);
    }
}
