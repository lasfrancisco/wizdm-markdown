import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownRoot } from './markdown.component';
import { MarkdownBlock } from './block/block.component';
import { MarkdownInline } from './inline/inline.component';
import { PrismHiglighther } from './prism/prism.component';

@NgModule({
  imports: [ 
    CommonModule
  ],
  declarations: [
    MarkdownRoot,
    MarkdownInline,
    MarkdownBlock,
    PrismHiglighther,
  ],
  exports: [
    MarkdownRoot,
    PrismHiglighther
  ]
})
export class MarkdownModule { }