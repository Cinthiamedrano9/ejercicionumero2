import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MidescripcionpersonalPageRoutingModule } from './midescripcionpersonal-routing.module';

import { MidescripcionpersonalPage } from './midescripcionpersonal.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MidescripcionpersonalPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MidescripcionpersonalPage]
})
export class MidescripcionpersonalPageModule {}
