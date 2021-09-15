import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { DataService } from '../../Services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent implements OnInit, OnDestroy {
  @Input() public sidenavOpened = false;

  language!: string;
  languageSubscription = new Subscription();

  jobtitleAnimationStatus!: number;
  jobtitleAnimationStatusSubscription = new Subscription();

  // sidenav status subscription
  sidenavStatus!: string;
  sidenavStatusSubscription = new Subscription();

  constructor(private data: DataService) {}

  ngOnInit(): void {
    // Subscribe to component-shared data service
    this.languageSubscription = this.data.currentLanguage.subscribe(
      (language) => {
        this.language = language!;
        console.log(this.language);
      }
    );
    this.jobtitleAnimationStatusSubscription =
      this.data.jobAnimationStatus.subscribe(
        (status) => (this.jobtitleAnimationStatus = status!)
      );
    this.sidenavStatusSubscription = this.data.sidenavStatus.subscribe(
      (currentState) => (this.sidenavStatus = currentState!)
    );
    console.log(this.sidenavStatus);
  }
  ngOnDestroy() {
    // unsubscribe from data service
    this.languageSubscription.unsubscribe();
    this.jobtitleAnimationStatusSubscription.unsubscribe();
  }

  //////////// Stop jobtitle animation when language is changed

  stopAnim() {
    this.data.changeJobAnimationStatus(1);
  }

  //////////// Language toggle

  toggleLanguage(updatedLanguage: string) {
    this.data.changeLanguage(updatedLanguage);
    localStorage.setItem('language', updatedLanguage);
  }

  /////////// Toggle sidenav status
  toggleSideNavStatus() {
    if (this.sidenavStatus == 'opened') {
      this.data.changeSidenavStatus('closed');
    } else {
      this.data.changeSidenavStatus('opened');
    }
  }
}
