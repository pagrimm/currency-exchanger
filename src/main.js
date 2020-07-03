import 'bootstrap';
import './bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { ExchangeService } from './../src/exchange-service.js';
import { ExchangeGlossary } from './../src/currency-exchanger.js';
import { InputObject } from './../src/currency-exchanger.js';

$(document).ready(function() {
  const glossary = new ExchangeGlossary();
  populateSelect(glossary);
  $("form").submit(function(event) {
    event.preventDefault();
    let input = getInput();
    (async () => {
      let exchangeService = new ExchangeService();
      const response = await exchangeService.getExchange();
      showResults(input, glossary, response);
    })();
  });
});

function populateSelect (glossary) {
  for (const currency in glossary) {
    $("#from-input").append(`<option value="${currency}">${glossary[currency].name}</option>`);
    $("#to-input").append(`<option value="${currency}">${glossary[currency].name}</option>`);
  }
}

function getInput() {
  let amount = $("#amount-input").val();
  let from = $("#from-input").val();
  let to = $("#to-input").val();
  document.getElementById("input-form").reset();
  return new InputObject(amount, from, to);
}

function showResults (input, glossary, response) {
  $("#output-area").html("");
  if (response) {
    if (input.to === "All") {
      for (const currency in response.conversion_rates) {
        let convertedAmount = calculateAmount(input.amount, input.from, currency, response);
        $("#output-area").append(`<div>${input.amount} in ${glossary[input.from].name} is equal to ${convertedAmount} in ${glossary[currency].name}.</div>`);
      } 
    } else {
      let convertedAmount = calculateAmount(input.amount, input.from, input.to, response);
      $("#output-area").append(`<div>${input.amount} in ${glossary[input.from].name} is equal to ${convertedAmount} in ${glossary[input.to].name}.</div>`);
    }
  } else {
    $("#output-area").text("There was an error, please try again.");
  }
}

function calculateAmount (amount, from, to, response) {
  let outputAmount;
  if (from === "USD") {
    outputAmount = (amount * response.conversion_rates[to]).toFixed(2);
  } else {
    outputAmount = ((amount / response.conversion_rates[from]) * response.conversion_rates[to]).toFixed(2);
  }
  return outputAmount;
}