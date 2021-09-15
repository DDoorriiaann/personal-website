import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  language!: string;
  languageSubscription = new Subscription();
  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.languageSubscription = this.data.currentLanguage.subscribe(
      (language) => (this.language = language!)
    );
  }
}
