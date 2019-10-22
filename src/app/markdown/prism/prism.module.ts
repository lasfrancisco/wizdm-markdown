import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrismHighlihter, PrismTokenizer } from './prism.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PrismHighlihter,
    PrismTokenizer
  ],
  exports: [
    PrismHighlihter,
    PrismTokenizer
  ]
})
export class PrismModule { }