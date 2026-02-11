import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import {HeaderComponent} from '../header/header.component';

@Component({
  standalone: true,
  selector: 'app-dashboard-layout',
  imports: [RouterOutlet, SidebarComponent, HeaderComponent],
  templateUrl: './dashboard-layout.component.html'
})
export class DashboardLayoutComponent {}
