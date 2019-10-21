

(function(global){
    'use strict';

  const Prism = require('prismjs');

  const loadLanguages = require('prismjs/components/');

  //loadLanguages(['cpp']);

  module.exports = {
    Prism,
    loadLanguages
  };

}(window));