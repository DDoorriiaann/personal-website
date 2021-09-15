import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { DataService } from '../../Services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit, AfterViewInit, OnDestroy {
  language!: string;
  languageSubscription = new Subscription();

  jobtitleAnimationStatus!: number;
  jobtitleAnimationStatusSubscription = new Subscription();

  ////Jobtitle animation related variables

  @ViewChild('jobTitle') jobTitle!: ElementRef;
  firstJobTitle = 'Front-End';
  secondJobTitle = 'Back-End';
  thirdJobTitle = 'FullStack';
  animCount = 0;
  i = 0;

  constructor(private data: DataService) {}
  ngOnInit(): void {
    this.languageSubscription = this.data.currentLanguage.subscribe(
      (language) => (this.language = language!)
    );
    this.jobtitleAnimationStatusSubscription =
      this.data.jobAnimationStatus.subscribe(
        (status) => (this.jobtitleAnimationStatus = status!)
      );
  }
  ngAfterViewInit(): void {
    /// Check if language selection is already stored in localStorage
    if (localStorage.getItem('language')) {
      this.language = localStorage.getItem('language')!;
      this.jobTitle.nativeElement.innerHTML = '';
    }

    /// Restart jobtitle animation after each page refresh
    this.i = -1;
    this.write1();
  }
  ngOnDestroy() {
    this.languageSubscription.unsubscribe();
    this.jobtitleAnimationStatusSubscription.unsubscribe();
  }

  //////////// Typewriter effect ////////////////////
  write1() {
    let speed = Math.random() * 90 + 50;
    if (this.i < this.firstJobTitle.length && this.animCount == 0) {
      this.jobTitle.nativeElement.innerHTML += this.firstJobTitle.charAt(
        this.i
      );
      this.i++;
      setTimeout(() => this.write1(), speed);
    } else if (this.i == this.firstJobTitle.length && this.animCount == 0) {
      this.delete1();
    }
  }
  delete1() {
    let speed = Math.random() * 80 + 40;
    if (this.jobtitleAnimationStatus == 0) {
      if (this.i >= 1) {
        this.jobTitle.nativeElement.innerHTML =
          this.jobTitle.nativeElement.innerHTML.slice(0, -1);
        this.i--;
        setTimeout(() => this.delete1(), speed);
      } else if (this.i == 0) {
        this.write2();
      }
    }
  }
  write2() {
    let speed = Math.random() * 90 + 30;
    if (this.jobtitleAnimationStatus == 0) {
      if (this.i < this.secondJobTitle.length) {
        this.jobTitle.nativeElement.innerHTML += this.secondJobTitle.charAt(
          this.i
        );
        this.i++;
        setTimeout(() => this.write2(), speed);
      } else if (this.i == this.secondJobTitle.length) {
        this.delete2();
      }
    }
  }
  delete2() {
    let speed = Math.random() * 50 + 20;
    if (this.jobtitleAnimationStatus == 0) {
      if (this.i > 0) {
        this.jobTitle.nativeElement.innerHTML =
          this.jobTitle.nativeElement.innerHTML.slice(0, -1);
        this.i--;
        setTimeout(() => this.delete2(), speed);
      } else if (this.i == 0) {
        this.write3();
      }
    }
  }
  write3() {
    let speed = Math.random() * 50;
    if (this.jobtitleAnimationStatus == 0) {
      if (this.i < this.thirdJobTitle.length) {
        this.jobTitle.nativeElement.innerHTML += this.thirdJobTitle.charAt(
          this.i
        );
        this.i++;
        setTimeout(() => this.write3(), speed);
      }
    }
  }
}
