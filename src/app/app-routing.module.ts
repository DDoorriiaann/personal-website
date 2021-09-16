import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './modules/hero/hero.component';
import { PortfolioComponent } from './modules/portfolio/portfolio.component';
import { KillTheBacklogComponent } from './modules/kill-the-backlog/kill-the-backlog.component';

const routes: Routes = [
  {
    path: 'home',
    component: HeroComponent,

    data: { animation: 'home' },
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    data: { animation: 'portfolio' },
  },
  { path: 'kill-the-backlog', component: KillTheBacklogComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
