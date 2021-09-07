import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements AfterViewInit {
  @ViewChild('jobTitle') jobTitle!: ElementRef;
  language = 'English';
  firstJobTitle = 'Front-End';
  secondJobTitle = 'Back-End';
  thirdJobTitle = 'FullStack';
  animCount = 0;
  i = 0;
  constructor() {}
  ngAfterViewInit(): void {
    this.write1();
    if (localStorage.getItem('language')) {
      this.language = localStorage.getItem('language')!;
    }
    if (localStorage.getItem('animCount')) {
      this.animCount = parseInt(localStorage.getItem('animCount')!, 10);
    }
  }
  //////////// Typewriter effect
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
    } else if (this.animCount == 1) {
      this.jobTitle.nativeElement.innerHTML = 'FullStack';
    }
  }
  delete1() {
    let speed = Math.random() * 80 + 40;
    if (this.animCount == 0) {
      if (this.i >= 1) {
        this.jobTitle.nativeElement.innerHTML =
          this.jobTitle.nativeElement.innerHTML.slice(0, -1);
        this.i--;
        setTimeout(() => this.delete1(), speed);
      } else if (this.i == 0) {
        this.write2();
      }
    } else {
      this.jobTitle.nativeElement.innerHTML = 'FullStack';
    }
  }
  write2() {
    let speed = Math.random() * 90 + 30;
    if (this.animCount == 0) {
      if (this.i < this.secondJobTitle.length) {
        this.jobTitle.nativeElement.innerHTML += this.secondJobTitle.charAt(
          this.i
        );
        this.i++;
        setTimeout(() => this.write2(), speed);
      } else if (this.i == this.secondJobTitle.length) {
        this.delete2();
      }
    } else {
      this.jobTitle.nativeElement.innerHTML = 'FullStack';
    }
  }
  delete2() {
    let speed = Math.random() * 50 + 20;
    if (this.animCount == 0) {
      if (this.i > 0) {
        this.jobTitle.nativeElement.innerHTML =
          this.jobTitle.nativeElement.innerHTML.slice(0, -1);
        this.i--;
        setTimeout(() => this.delete2(), speed);
      } else if (this.i == 0) {
        this.write3();
      }
    } else {
      this.jobTitle.nativeElement.innerHTML = 'FullStack';
    }
  }
  write3() {
    let speed = Math.random() * 50;
    if (this.animCount == 0) {
      if (this.i < this.thirdJobTitle.length) {
        this.jobTitle.nativeElement.innerHTML += this.thirdJobTitle.charAt(
          this.i
        );
        this.i++;
        setTimeout(() => this.write3(), speed);
      }
    } else {
      this.jobTitle.nativeElement.innerHTML = 'FullStack';
    }
  }
  stopAnim() {
    this.animCount = 1;
  }

  //////////// Language toggle

  toggleLanguage(updatedLanguage: string) {
    this.language = updatedLanguage;
    localStorage.setItem('language', updatedLanguage);
    localStorage.setItem('animCount', '0');
  }
}
