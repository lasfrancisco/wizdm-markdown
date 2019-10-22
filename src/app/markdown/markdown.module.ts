import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownRoot } from './markdown.component';
import { MarkdownBlock } from './block/block.component';
import { MarkdownInline } from './inline/inline.component';
import { PrismModule } from '../prism/prism.module';
import { MarkdownConfig, mdConfigToken } from './tree/tree-config';

@NgModule({
  imports: [ 
    CommonModule,
    PrismModule
  ],
  declarations: [
    MarkdownRoot,
    MarkdownInline,
    MarkdownBlock
  ],
  exports: [
    MarkdownRoot
  ]
})
export class MarkdownModule { 
  static init(config?: MarkdownConfig): ModuleWithProviders<MarkdownModule> {
    return {
      ngModule: MarkdownModule,
      providers: [
        { provide: mdConfigToken, useValue: config }
      ]
    }
  }
}