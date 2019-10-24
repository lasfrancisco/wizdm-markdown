import { Injectable } from '@angular/core';
import { prism/*, components*/ } from './prism';

@Injectable()
export class PrismService {

  private grammar: any;

  constructor() { 
    //console.log(components);
  }

  get languages() { return prism.languages; }

  public selectLanguage(language: string) {
    this.grammar = !!language ? prism.languages[language] : null;
  }

  public tokenize(source: string): any[] {
    // Skips invalid source
    if(!source) { return ['']; }
    // Returns the full text as a single token when no grammar is defined
    if(!this.grammar) { return [source]; }
    // Tokenize the source code according to the selected grammar
    return prism.tokenize(source, this.grammar);
  }

}