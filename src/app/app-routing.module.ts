import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './components/layout/contacto/contacto.component';
import { HomeComponent } from './components/layout/home/home.component';
import { PiezasComponent } from './components/layout/piezas/piezas.component';
import { VehiculosComponent } from './components/layout/vehiculos/vehiculos.component';

const routes: Routes = [
  {
    path: "home",
    component:HomeComponent
  },
  {
    path: "vehiculos",
    component:VehiculosComponent
  },
  {
    path: "piezas",
    component:PiezasComponent
  },
  {
    path: "contacto",
    component:ContactoComponent
  },
];

 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
