import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Clase31AgoSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [Clase31AgoSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent],
})
export class Clase31AgoHomeModule {}
