/**
 * @module PrismJS proxy for Angular
 * @version 0.0.1
 * @author Lucio Francisco
 * @description Forces PrismJS to work in manual mode
 */

(function(global){
  'use strict';
	
  const prism = require('prismjs');
  prism.manual = true;

  // Exports the parser setup function
	module.exports = { 
    prism
  };
  
}(window));