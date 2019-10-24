/**
 * @module PrismJS proxy for Angular
 * @version 0.0.1
 * @author Lucio Francisco
 * @description Forces PrismJS to work in manual mode
 */

(function(global){
  'use strict';
  // Requires Prism
  const prism = require('prismjs');
  // Forces manual mode
  prism.manual = true;
  // Exports the module
	module.exports = { 
    prism
  };
  
}(window));