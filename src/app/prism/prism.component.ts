import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import * as prism from 'prismjs';

@Component({
  selector: 'pre[wm-prism]',
  template: '<code [language]="language" [wm-prism]="source"></code>',
  host: { 'class': 'wm-prism language-none' }
})
/** Perform code hilighting by processing an input text to be rendered into an angular template 
 * Using prism as tokenizer @see {https://github.com/PrismJS/prism} */
export class PrismHighlihter { 
  /** Selects the language */
  @Input('language') language: string;
  /** Parses the source text */
  @Input('wm-prism') source: string; 
}

@Component({ 
  selector: ':not(pre)[wm-prism]', 
  templateUrl: './prism.component.html'
}) 
export class PrismTokenizer { 

  private grammar: any;

  /** Selects the most appropriate grammar according to the language */
  @Input('language') set language(language: string) {
    this.grammar = !!language ? prism.languages[language] : null;
  }

  public tokens: any;

  /** Tokenizes the input string or pass along the already tokenized array */
  @Input('wm-prism') set highlight(source: string|any[]) {
    this.tokens = !!source ? typeof source === 'string' ? this.tokenize(source) : source : [];
  }

  /** Helper for rendering strings */
  isString(token: any): boolean { return typeof(token) === 'string'; } 

  /** Tokenizes the source text using Prism */
  private tokenize(source: string): any[] {
    // Skips invalid source
    if(!source) { return ['']; }
    // Returns the full text as a single token when no grammar is defined
    if(!this.grammar) { return [source]; }
    // Tokenize the source code according to the selected grammar
    return prism.tokenize(source, this.grammar);
  }
}
