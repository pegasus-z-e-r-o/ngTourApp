import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule, Routes } from '@angular/router';
import { PlacesModule } from './module/places.module';
import { KanchipuramComponent } from './components/kanchipuram/kanchipuram.component';
import { VelloreComponent } from './components/vellore/vellore.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ThiruvannamalaiComponent } from './thiruvannamalai/thiruvannamalai.component';



// RouterModule.forRoot([
//   { path:'chennai', component: ChennaiComponent }
// ])

@NgModule({
  declarations: [AppComponent, KanchipuramComponent, VelloreComponent, ThiruvannamalaiComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,    
    PlacesModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
