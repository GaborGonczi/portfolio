import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NAVBAR_IMPORTS } from '@src/app/components/navbar/navbar.imports';

@Component({
  selector: 'app-navbar',
  imports: NAVBAR_IMPORTS,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  private router = inject(Router)
  private route = inject(ActivatedRoute)

  navigateToHomepage() {
    this.router.navigateByUrl('/');
  }

}
