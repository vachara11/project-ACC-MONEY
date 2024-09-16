import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SitPage } from './sit.page';

const routes: Routes = [
  {
    path: '',
    component: SitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SitPageRoutingModule {}
