import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MidescripcionpersonalPage } from './midescripcionpersonal.page';

const routes: Routes = [
  {
    path: '',
    component: MidescripcionpersonalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MidescripcionpersonalPageRoutingModule {}
