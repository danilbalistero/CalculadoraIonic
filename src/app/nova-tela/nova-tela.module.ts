import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovaTelaPageRoutingModule } from './nova-tela-routing.module';

import { NovaTelaPage } from './nova-tela.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovaTelaPageRoutingModule
  ],
  declarations: [NovaTelaPage]
})
export class NovaTelaPageModule {}
