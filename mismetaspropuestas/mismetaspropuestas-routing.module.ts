import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MismetaspropuestasPage } from './mismetaspropuestas.page';

const routes: Routes = [
  {
    path: '',
    component: MismetaspropuestasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MismetaspropuestasPageRoutingModule {}
