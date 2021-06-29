import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './component/products-list/products-list.component';
import { ProductsDetailsComponent } from './component/products-details/products-details.component';
import { InicioComponent } from './component/inicio/inicio.component';
import { CarruselMarcasComponent } from './component/carrusel-marcas/carrusel-marcas.component';
import { AboutComponent } from './component/body/about/about.component';
import { ServicesComponent } from './component/services/services.component';
import { TeamComponent } from './component/team/team.component';
import { BodyComponent } from './component/body/body.component';
import { ContactoComponent } from './component/contacto/contacto.component';

const routes: Routes = [
  { path: '', component: BodyComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'servicios', component: ServicesComponent },
  { path: 'team', component: TeamComponent },
  { path: 'carrusel-marcas', component: CarruselMarcasComponent },
  { path: 'body', component: BodyComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'products-list', component: ProductsListComponent },
  { path: 'products/:productId', component: ProductsDetailsComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
