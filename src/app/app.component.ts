import { Component } from '@angular/core';
import {SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import {HeaderComponent} from './navigation/header/header.component';
import {NavtabsComponent} from './navigation/navtabs/navtabs.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'theHotel';
}
