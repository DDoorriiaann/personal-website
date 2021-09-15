import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fader } from './route-animations';
import { MatSidenav } from '@angular/material/sidenav';
import { DataService } from './Services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    fader,
    // animation triggers go here
  ],
})
export class AppComponent {
  //// Sidenav
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  // sidenav status subscription
  sidenavStatus!: string;
  sidenavStatusSubscription = new Subscription();

  title = 'personal-website';

  constructor(private data: DataService) {}
  ngAfterViewInit(): void {
    // Detect sidenav status and toggle status if navbar button is clicked
    this.sidenavStatusSubscription = this.data.sidenavStatus.subscribe(
      (currentState) => {
        this.sidenavStatus = currentState!;
        if (currentState == 'opened') {
          this.sidenav.open();
        } else {
          this.sidenav.close();
        }
      }
    );
  }
  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
}
