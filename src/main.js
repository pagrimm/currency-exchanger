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
    $("#from-input").append(`<option value="${currency}">${glossary[currency].name}</option>`);
    $("#to-input").append(`<option value="${currency}">${glossary[currency].name}</option>`);
  }
}

function showResults (amount, from, to, glossary, response) {
  if (to === "All") {
    for (const currency in response.conversion_rates) {
      let convertedAmount = (amount * response.conversion_rates[currency]).toFixed(2);
      $("#output-area").append(`<div>${amount} in ${glossary[from].name} is equal to ${convertedAmount} in ${glossary[currency].name}.</div>`)
    } else {
      let convertedAmount = (amount * response.conversion_rates[to]).toFixed(2);
      $("#output-area").append(`<div>${amount} in ${glossary[from].name} is equal to ${convertedAmount} in ${glossary[to].name}.</div>`)
    }
  }
}