import { InjectionToken } from '@angular/core';
import { prism } from './prism';

export const PRISM = new InjectionToken<Prism>('wizdm-prism', {
  providedIn: 'root',
  factory: () => prism
});

export interface Prism {

  languages: Grammar[];
  tokenize(source: string, grammar: Grammar): (string|Token)[];
}

export type Grammar = any;

export interface Token {
  type: string;
  alias: string|string[];
  content: string|Token[];
};
