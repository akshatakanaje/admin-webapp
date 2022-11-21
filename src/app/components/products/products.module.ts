import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddproductComponent } from './addproduct/addproduct.component';
import { DetailsproductComponent } from './detailsproduct/detailsproduct.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';



@NgModule({
  declarations: [
    AddproductComponent,
    DetailsproductComponent,
    ViewproductComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
