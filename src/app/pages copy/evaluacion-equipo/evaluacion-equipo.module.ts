import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EvaluacionEquipoPageRoutingModule } from './evaluacion-equipo-routing.module';

import { EvaluacionEquipoPage } from './evaluacion-equipo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EvaluacionEquipoPageRoutingModule
  ],
  declarations: [EvaluacionEquipoPage]
})
export class EvaluacionEquipoPageModule {}
