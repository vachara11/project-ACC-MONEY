import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SitPageRoutingModule } from './sit-routing.module';

import { SitPage } from './sit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SitPageRoutingModule
  ],
  declarations: [SitPage]
})
export class SitPageModule {}
