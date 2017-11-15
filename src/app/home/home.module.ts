import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './pages/home/home.component';
import { homeRoutes } from './home.routing';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild(homeRoutes)
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
