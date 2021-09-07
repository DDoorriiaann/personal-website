import { typeWithParameters } from '@angular/compiler/src/render3/util';
import {
  Component,
  AfterViewInit,
  ElementRef,
  ViewChild,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements AfterViewInit {
  @ViewChild('jobTitle') jobTitle!: ElementRef;

  firstJobTitle = 'Front-End';
  secondJobTitle = 'Back-End';
  thirdJobTitle = 'FullStack';
  i = 0;
  constructor() {}
  ngAfterViewInit(): void {
    this.write1();
  }

  write1() {
    let speed = Math.random() * 90 + 50;
    if (this.i < this.firstJobTitle.length) {
      this.jobTitle.nativeElement.innerHTML += this.firstJobTitle.charAt(
        this.i
      );
      this.i++;
      console.log('write1');
      console.log(this.i);
      setTimeout(() => this.write1(), speed);
    } else if (this.i == this.firstJobTitle.length) {
      this.delete1();
    }
  }
  delete1() {
    let speed = Math.random() * 80 + 40;
    if (this.i >= 1) {
      this.jobTitle.nativeElement.innerHTML =
        this.jobTitle.nativeElement.innerHTML.slice(0, -1);
      this.i--;
      setTimeout(() => this.delete1(), speed);
    } else if (this.i == 0) {
      this.write2();
    }
  }
  write2() {
    let speed = Math.random() * 90 + 30;
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
  delete2() {
    let speed = Math.random() * 50 + 20;
    if (this.i > 0) {
      this.jobTitle.nativeElement.innerHTML =
        this.jobTitle.nativeElement.innerHTML.slice(0, -1);
      this.i--;
      setTimeout(() => this.delete2(), speed);
    } else if (this.i == 0) {
      this.write3();
    }
  }
  write3() {
    let speed = Math.random() * 50;
    if (this.i < this.thirdJobTitle.length) {
      this.jobTitle.nativeElement.innerHTML += this.thirdJobTitle.charAt(
        this.i
      );
      this.i++;
      setTimeout(() => this.write3(), speed);
    }
  }
}
