import 'bootstrap';
import './bootstrap.min.css';
import './styles.css';
import $ from "jquery";
//import {ExchangeService} from './exchange-service.js'
import { ExchangeGlossary } from './../src/currency-exchanger.js';

$(document).ready(function() {
  let glossary = new ExchangeGlossary();
  populateSelect(glossary);
  $("form").submit(function(event) {
    event.preventDefault();
  });
});

function populateSelect (glossary) {
  for (const currency in glossary) {
    $("#from-input").append(`<option value="${currency}">${glossary[currency]}</option>`);
    $("#to-input").append(`<option value="${currency}">${glossary[currency]}</option>`);
  }
}