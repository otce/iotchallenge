import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TeamComponent } from './team/team.component';
import { TestientalsComponent } from './testientals/testientals.component';
import { ContactComponent } from './contact/contact.component';
import { ParticlesModule } from 'angular-particle';
import { NgImageAsParticlesModule } from 'ng-image-as-particles/src/public-api';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    GalleryComponent,
    TeamComponent,
    TestientalsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParticlesModule,
    NgImageAsParticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
