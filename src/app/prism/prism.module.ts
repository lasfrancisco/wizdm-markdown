import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrismHighlihter } from './highlighter/highlighter.component';
import { PrismTokenizer } from './tokenizer/tokenizer.component';
import { PrismService } from './prism/prism.service';

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
  ],
  providers: [PrismService]
})
export class PrismModule { }