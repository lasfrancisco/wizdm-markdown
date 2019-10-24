import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ObserversModule } from '@angular/cdk/observers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatDividerModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { MarkdownModule } from './markdown/markdown.module';

// Includes additional languages for syntax highlighting right before importing MarkdownModule (depending on PrismModule)
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';
//import 'prismjs/components/prism-csharp';
//import 'prismjs/components/prism-typescript'

@NgModule({
  imports: [   
    BrowserModule, 
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    ObserversModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MarkdownModule.init({ commonmark: true, footnotes: true, prism: true })
  ],
  
  declarations: [ 
    AppComponent
  ],

  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
