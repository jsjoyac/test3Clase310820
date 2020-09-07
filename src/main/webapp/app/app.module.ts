import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { Clase31AgoSharedModule } from 'app/shared/shared.module';
import { Clase31AgoCoreModule } from 'app/core/core.module';
import { Clase31AgoAppRoutingModule } from './app-routing.module';
import { Clase31AgoHomeModule } from './home/home.module';
import { Clase31AgoEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    Clase31AgoSharedModule,
    Clase31AgoCoreModule,
    Clase31AgoHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    Clase31AgoEntityModule,
    Clase31AgoAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class Clase31AgoAppModule {}
