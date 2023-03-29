import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/layout/home/home.component';
import { VehiculosComponent } from './components/layout/vehiculos/vehiculos.component';
import { PiezasComponent } from './components/layout/piezas/piezas.component';
import { ContactoComponent } from './components/layout/contacto/contacto.component';
import { HeaterComponent } from './components/layout/heater/heater.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { ContentComponent } from './components/layout/content/content.component';
import { AsideComponent } from './components/layout/aside/aside.component';
//import { MegaMenuModule } from 'primeng/megamenu';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VehiculosComponent,
    PiezasComponent,
    ContactoComponent,
    HeaterComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    AsideComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
