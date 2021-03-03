import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from '../about-me/about-me.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactMeComponent } from '../contact-me/contact-me.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { SkillComponent } from '../skill/skill.component';

const routes: Routes = [
  {
    path: 'aboutMe',
    component: AboutMeComponent
  },
  {
    path: 'skill',
    component: SkillComponent
  },
  {
    path: 'contactMe',
    component: ContactMeComponent
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  }
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRouteModule { }
