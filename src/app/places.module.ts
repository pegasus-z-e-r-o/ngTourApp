import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlacesService } from './service/places.service';
import { RouterModule, Routes } from '@angular/router';
import { ChennaiComponent } from './chennai/chennai.component';
import { MaduraiComponent } from './madurai/madurai.component';
import { ThanjavurComponent } from './thanjavur/thanjavur.component';
import { CoimbatoreComponent } from './coimbatore/coimbatore.component';
import { KanchipuramComponent } from './kanchipuram/kanchipuram.component';
import { VelloreComponent } from './vellore/vellore.component';

const routes: Routes = [
  { path: 'chennai', component: ChennaiComponent },
  { path: 'madurai', component: MaduraiComponent },
  { path: 'thanjavur', component: ThanjavurComponent },
  { path: 'covai', component: CoimbatoreComponent },
  { path: 'kanchipuram', component: KanchipuramComponent },
  { path: 'vellore', component: VelloreComponent }
];

@NgModule({
  declarations: [ChennaiComponent, MaduraiComponent, ThanjavurComponent, CoimbatoreComponent],
  providers: [PlacesService],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  // if you need to show these components in another component, you need to export, then uncomment the below line
  // exports: [ChennaiComponent, MaduraiComponent, ThanjavurComponent, CoimbatoreComponent],
})
export class PlacesModule { }
