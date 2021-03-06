import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroComponent } from './modules/hero/hero.component';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/Toolbar';
import { KillTheBacklogComponent } from './modules/kill-the-backlog/kill-the-backlog.component';
import { PortfolioComponent } from './modules/portfolio/portfolio.component';
import { NavigationBarComponent } from './modules/navigation-bar/navigation-bar.component';

@NgModule({
  declarations: [AppComponent, HeroComponent, KillTheBacklogComponent, PortfolioComponent, NavigationBarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatDividerModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
