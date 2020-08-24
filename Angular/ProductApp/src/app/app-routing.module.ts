import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route } from '@angular/compiler/src/core';
import { Routes, RouterModule } from '@angular/router'
import { ProductListComponent } from '../app/product-list/product-list.component'

//assigning path to the compnenets
const routes: Routes = [
  { path: '', component: ProductListComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
