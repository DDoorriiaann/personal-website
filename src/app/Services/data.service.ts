import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // Selected language using navbar
  private languageSource = new BehaviorSubject(
    localStorage.getItem('language')
  );
  currentLanguage = this.languageSource.asObservable();

  // Status of the job title animation inside HeroComponent
  private jobAnimationStatusSource = new BehaviorSubject(0);
  jobAnimationStatus = this.jobAnimationStatusSource.asObservable();

  // Status of the sidenav inside appComponent

  private sidenavStatusSource = new BehaviorSubject('closed');
  sidenavStatus = this.sidenavStatusSource.asObservable();

  constructor() {}

  changeLanguage(language: string) {
    this.languageSource.next(language);
  }
  changeJobAnimationStatus(jobAnimationStatus: number) {
    this.jobAnimationStatusSource.next(jobAnimationStatus);
  }
  changeSidenavStatus(sidenavStatus: string) {
    this.sidenavStatusSource.next(sidenavStatus);
  }
}
