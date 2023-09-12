import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlacesService } from './places.service';
import { RouterModule, Routes } from '@angular/router';
import { ChennaiComponent } from '../components/chennai/chennai.component';
import { MaduraiComponent } from '../components/madurai/madurai.component';
import { ThanjavurComponent } from '../components/thanjavur/thanjavur.component';
import { CoimbatoreComponent } from '../components/coimbatore/coimbatore.component';
import { KanchipuramComponent } from '../kanchipuram/kanchipuram.component';

const routes: Routes = [
  { path: 'chennai', component: ChennaiComponent },
  { path: 'madurai', component: MaduraiComponent },
  { path: 'thanjavur', component: ThanjavurComponent },
  { path: 'covai', component: CoimbatoreComponent },
  { path: 'kanchipuram', component: KanchipuramComponent }
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
