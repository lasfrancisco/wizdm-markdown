import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownRoot } from './markdown.component';
import { MarkdownBlock } from './block/block.component';
import { MarkdownInline } from './inline/inline.component';
import { PrismHighlihter, PrismTokenizer } from './prism/prism.component';

@NgModule({
  imports: [ 
    CommonModule
  ],
  declarations: [
    MarkdownRoot,
    MarkdownInline,
    MarkdownBlock,
    PrismHighlihter,
    PrismTokenizer
  ],
  exports: [
    MarkdownRoot,
    PrismHighlihter,
    PrismTokenizer
  ]
})
export class MarkdownModule { }