import { Routes } from '@angular/router';
import { HomePage } from '@src/app/components/home-page/home-page';
import { Projects } from '@src/app/components/projects/projects';
import { Cv } from '@src/app/components/cv/cv';
import { CvNavbar } from '@src/app/components/cv/components/cv-navbar/cv-navbar';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path:'projects',
    component:Projects
  },
  {
    path: 'cv',
    component: Cv,
  },
  {
    path: 'cv',
    outlet: 'navbar',
    component: CvNavbar,
  },

  {
    path: '**',
    component: HomePage,
  },
];
