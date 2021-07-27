import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { DigitalClockComponent } from '../digital-clock/digital-clock.component';
import { AnalogClockComponent } from '../analog-clock/analog-clock.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, DigitalClockComponent, AnalogClockComponent]
})
export class HomePageModule {}
