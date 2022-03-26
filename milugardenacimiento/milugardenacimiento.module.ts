import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MilugardenacimientoPageRoutingModule } from './milugardenacimiento-routing.module';

import { MilugardenacimientoPage } from './milugardenacimiento.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MilugardenacimientoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MilugardenacimientoPage]
})
export class MilugardenacimientoPageModule {}
