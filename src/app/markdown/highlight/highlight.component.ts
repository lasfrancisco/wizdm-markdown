import { Component, OnInit, OnDestroy, Input, HostBinding } from '@angular/core';
//import { loadLanguages } from 'prismjs/components/';
//import Prism from 'prismjs';

//import 'prismjs/components/prism-core';
/*import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';
import 'prismjs/components/prism-csharp';
import 'prismjs/components/prism-typescript'; */
/*import 'prismjs/components/prism-css';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-perl';
import 'prismjs/components/prism-php';
import 'prismjs/components/prism-python';
;*/

import { Prism, loadLanguages } from './prism.js';

@Component({
  selector: 'code[wm-highlight]',
  templateUrl: './highlight.component.html',
  host: { 'class' : 'wm-markdown-highlight language-css' }
}) 
/** Perform code hilighting by processing an input text to be rendered into an angular template 
 * Using prism as tokenizer @see {https://github.com/PrismJS/prism}
*/
export class CodeHighlighter {

  public tokens: any;

  constructor() {

    //import("prismjs/components/prism-cpp");
    //loadlanguages('cpp');

    console.log(loadLanguages);

    //loadLanguages(['cpp']);

  }
/*
  @HostBinding('class') get languageClass() {
    return !!this.language ? `${this.language}-css` : '';
  }
*/
  @Input('language') language: string;
  
  @Input('wm-highlight') set highlight(source: string) {
    this.tokens = !!source ? this.tokenize(source) : [];
  }

  isString(token: any): boolean { 
    return typeof(token) === 'string';
  } 

  private tokenize(source: string): any[] {

    //loadLanguages([this.language]);

    // Select the most appropriate grammar according to the language
    const grammar = !!this.language ? Prism.languages[this.language] : undefined;

    console.log(grammar);
    // Tokenize the source code. If no language is defined, the full block will be rendered as it is
    return !!source ? !!grammar ? Prism.tokenize(source, grammar) : [source] : [];
  }
}