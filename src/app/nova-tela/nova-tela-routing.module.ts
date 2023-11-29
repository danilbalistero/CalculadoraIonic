import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NovaTelaPage } from './nova-tela.page';

const routes: Routes = [
  {
    path: '',
    component: NovaTelaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NovaTelaPageRoutingModule {}
