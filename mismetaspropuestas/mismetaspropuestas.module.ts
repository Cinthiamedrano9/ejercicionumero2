import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MismetaspropuestasPageRoutingModule } from './mismetaspropuestas-routing.module';

import { MismetaspropuestasPage } from './mismetaspropuestas.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MismetaspropuestasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MismetaspropuestasPage]
})
export class MismetaspropuestasPageModule {}
