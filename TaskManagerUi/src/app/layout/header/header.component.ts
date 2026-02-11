import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Input() title = 'Dashboard';

  constructor(private router: Router) {}

  goToNew() {
    this.router.navigate(['/new']);
  }
}
