import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

import { AppRouteModule } from './app-route/app-route.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillComponent } from './skill/skill.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BackendService } from './backend.service';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    SkillComponent,
    ContactMeComponent,
    PortfolioComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    MatButtonModule,
    AppRouteModule,
    MatListModule,
    MatGridListModule,
    MatCardModule
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
