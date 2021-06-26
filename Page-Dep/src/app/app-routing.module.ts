import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './component/products-list/products-list.component';
import { ProductsDetailsComponent } from './component/products-details/products-details.component';

const routes: Routes = [
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
