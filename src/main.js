import 'bootstrap';
import './bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { ExchangeService } from './../src/exchange-service.js';
import { ExchangeGlossary } from './../src/currency-exchanger.js';
import { ExchangeCalculator } from './../src/currency-exchanger.js';

$(document).ready(function() {
  const glossary = new ExchangeGlossary();
  populateSelect(glossary);
  $("form").submit(function(event) {
    event.preventDefault();
    let calculator = createCalculator();
    (async () => {
      let exchangeService = new ExchangeService();
      const response = await exchangeService.getExchange();
      showResults(calculator, glossary, response);
    })();
  });
});

function populateSelect (glossary) {
  for (const currency in glossary) {
    $("#from-input").append(`<option value="${currency}">${currency} - ${glossary[currency].name}</option>`);
    $("#to-input").append(`<option value="${currency}">${currency} - ${glossary[currency].name}</option>`);
  }
}

function createCalculator() {
  let amount = $("#amount-input").val();
  let from = $("#from-input").val();
  let to = $("#to-input").val();
  document.getElementById("input-form").reset();
  return new ExchangeCalculator(amount, from, to);
}

function showResults (calculator, glossary, response) {
  $("#output-area").html("");
  if (response) {
    $("#output-area").append(`<div>${calculator.amount} in ${glossary[calculator.from].name} is equal to...</div>`);
    if (calculator.to === "All") {
      for (const currency in response.conversion_rates) {
        if (!(calculator.from === currency)) {
          let convertedAmount = calculator.calculateAmount(response, currency);
          $("#output-area").append(`<div>${convertedAmount} in ${glossary[currency].name}</div>`);
        }
      } 
    } else {
      let convertedAmount = calculator.calculateAmount(response);
      $("#output-area").append(`<div>${convertedAmount} in ${glossary[calculator.to].name}</div>`);
    }
  } else {
    $("#output-area").text("There was an error, please try again.");
  }
}