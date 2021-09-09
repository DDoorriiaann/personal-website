import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './modules/hero/hero.component';
import { KillTheBacklogComponent } from './modules/kill-the-backlog/kill-the-backlog.component';
const routes: Routes = [
  { path: 'home', component: HeroComponent },
  { path: 'kill-the-backlog', component: KillTheBacklogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
