import { Component, Input } from '@angular/core';
import { PrismService } from '../prism/prism.service';

@Component({ 
  selector: ':not(pre)[wm-prism]', 
  templateUrl: './tokenizer.component.html'
}) 
export class PrismTokenizer { 

  public tokens: any;

  constructor(private prism: PrismService) {}

  /** Selects the most appropriate grammar according to the language */
  @Input() set language(language: string) {
    this.prism.selectLanguage(language);
  }

  /** Tokenizes the input string or pass along the already tokenized array */
  @Input('wm-prism') set highlight(source: string|any[]) {

    this.tokens = typeof(source) === 'string' ? this.prism.tokenize(source) : source;
  }

  /** Helper for rendering strings */
  isString(token: any): boolean { return typeof(token) === 'string'; } 
}
