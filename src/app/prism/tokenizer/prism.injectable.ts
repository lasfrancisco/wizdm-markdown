import { InjectionToken } from '@angular/core';
declare function require(name:string);

/** Prism.js injectable token */
export const PRISM = new InjectionToken<Prism>('wizdm-prism', {
  providedIn: 'root',
  factory: () => {
    // Forces prism to run in manual mode
    (window as any).Prism = ((window as any).Prism || {});
    (window as any).Prism.manual = true;
    // Requires Prism safely now
    return require('prismjs');
  }
});

/** Prism class */
export interface Prism {
  /** Manual mode flag */
  manual: boolean;
  /** Grammars */
  languages: { [language:string]: Grammar };
  /** Tokenizer function */
  tokenize(source: string, grammar: Grammar): (string|Token)[];
}

/** Grammar */
export type Grammar = any;

/** Prism token */
export interface Token {
  /** Token type */
  type: string;
  /** Token aliases */
  alias: string|string[];
  /** Token content */
  content: string|Token[];
};
