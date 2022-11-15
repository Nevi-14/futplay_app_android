import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AceptarRetoPageRoutingModule } from './aceptar-reto-routing.module';

import { AceptarRetoPage } from './aceptar-reto.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AceptarRetoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AceptarRetoPage]
})
export class AceptarRetoPageModule {}
