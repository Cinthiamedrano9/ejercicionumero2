import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MilugardenacimientoPage } from './milugardenacimiento.page';

const routes: Routes = [
  {
    path: '',
    component: MilugardenacimientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MilugardenacimientoPageRoutingModule {}
