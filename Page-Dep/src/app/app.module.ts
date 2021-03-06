import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { BodyComponent } from './component/body/body.component';
import { AboutComponent } from './component/body/about/about.component';
import { FooterComponent } from './component/footer/footer.component';
import { ProductsListComponent } from './component/products-list/products-list.component';
import { ServicesComponent } from './component/services/services.component';
import { ClientesComponent } from './component/clientes/clientes.component';
import { TeamComponent } from './component/team/team.component';
import { CarruselMarcasComponent } from './component/carrusel-marcas/carrusel-marcas.component';

import { SwiperModule } from 'swiper/angular';
import { ProductsDetailsComponent } from './component/products-details/products-details.component';
import { InicioComponent } from './component/inicio/inicio.component';
import { ContactoComponent } from './component/contacto/contacto.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    AboutComponent,
    FooterComponent,
    ProductsListComponent,
    ServicesComponent,
    ClientesComponent,
    TeamComponent,
    CarruselMarcasComponent,
    ProductsDetailsComponent,
    InicioComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
