import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesListComponent } from './pages-list/pages-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PagesListComponent],
  exports: [
    PagesListComponent
  ]
})
export class ComponentModule { }
