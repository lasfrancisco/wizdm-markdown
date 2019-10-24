import { Injectable } from '@angular/core';
import { prism } from './prism';

@Injectable()
export class PrismService {

  constructor() { }

  get languages() { return prism.languages; }

  public tokenize(source: string, grammar): any[] {
    return prism.tokenize(source, grammar);
  }

}