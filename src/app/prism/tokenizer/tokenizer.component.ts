import { Component, Input, Inject } from '@angular/core';
import { PRISM, Prism, Grammar, Token } from './prism';

@Component({ 
  selector: ':not(pre)[wm-prism]', 
  templateUrl: './tokenizer.component.html'
}) 
export class PrismTokenizer { 

  public tokens: (string|Token)[];
  private grammar: Grammar;

  constructor(@Inject(PRISM) private prism: Prism) {}

  /** Selects the most appropriate grammar according to the language */
  @Input() set language(language: string) {
    this.grammar = !!language ? this.prism.languages[language] : undefined;
  }

  /** Tokenizes the input string or pass along the already tokenized array */
  @Input('wm-prism') set highlight(source: string|Token[]) {
    
    this.tokens = typeof(source) === 'string' ? this.tokenize(source) : source;
  }

  /** Helper for rendering strings */
  isString(token: string|Token): boolean { return typeof(token) === 'string'; }

  /** Helper for rendering tokens */
  tokenClass(token: Token): string { return `token ${token.type || ''}`; } 

  /** Tokenizer funcion */
  private tokenize(source: string): (string|Token)[] {
    // Skips invalid source
    if(!source) { return ['']; }
    // Returns the full text as a single token when no grammar is defined
    if(!this.grammar) { return [source]; }
    // Tokenize the source code according to the selected grammar
    return this.prism.tokenize(source, this.grammar);
  }
}
