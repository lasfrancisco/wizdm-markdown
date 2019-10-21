import { Component, OnInit, OnDestroy, Input, HostBinding } from '@angular/core';
import * as prism from 'prismjs';

@Component({ 
  selector: '[wm-highlight]', 
  templateUrl: './highlight.component.html',
  host: { 'class' : 'wm-markdown-highlight language-css' }
}) 
/** Perform code hilighting by processing an input text to be rendered into an angular template 
 * Using prism as tokenizer @see {https://github.com/PrismJS/prism} */
export class CodeHighlighter { 

  public tokens: any;

  @Input('language') language: string;
  
  @Input('wm-highlight') set highlight(source: string|any[]) {
    // Tokenizes the input string or pass along the already tokenized array
    this.tokens = !!source ? typeof source === 'string' ? this.tokenize(source) : source : [];
  }

  isString(token: any): boolean { 
    return typeof(token) === 'string';
  } 

  private tokenize(source: string): any[] {
    // Select the most appropriate grammar according to the language
    const grammar = !!this.language ? prism.languages[this.language] : undefined;
    // Tokenize the source code. If no language is defined, the full block will be rendered as it is
    return !!source ? !!grammar ? prism.tokenize(source, grammar) : [source] : [];
  }
}