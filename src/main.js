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
    if (validateInput()) {
      let calculator = createCalculator();
      (async () => {
        let exchangeService = new ExchangeService();
        const response = await exchangeService.getExchange();
        checkResults(calculator, glossary, response);
      })();
    } else {
      $("section.output").show();
      $("#output-area").html(`<div class="error text-danger">Please enter a valid amount of currency.</div>`);
    }
  });
});

function validateInput () {
  if (/^[0-9]*(\.\d{1,2})?$/.test($("#amount-input").val())) {
    return true;
  } else {
    return false;
  }
}

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

function checkResults (calculator, glossary, response) {
  if (response[0]) {
    if (checkCurrencies(calculator, response[1])) {
      showResults(calculator, glossary, response[1]);
    } else {
      $("#output-area").text("Entered currency does not exist, please try again.");
      $("section.output").show();
    }
  } else {
    if (response[1]) {
      $("#output-area").text(`API returned status "${response[1]}", please try again.`);
      $("section.output").show();
    } else {
      $("#output-area").text("There was a network error, please try again.");
      $("section.output").show();
    }
  }
}

function showResults (calculator, glossary, response) {
  $("#output-area").html("");
  $("#output-area").append(`<div><span class="output-amount ${calculator.from}">${calculator.amount}</span> (${glossary[calculator.from].name}) is equal to:</div>`);
  if (calculator.to === "All") {
    for (const currency in response.conversion_rates) {
      if (!(calculator.from === currency)) {
        let convertedAmount = calculator.calculateAmount(response, currency);
        $("#output-area").append(`<div><span class="output-amount ${currency}">${convertedAmount}</span> (${glossary[currency].name})</div>`);
      }
    }
  } else {
    let convertedAmount = calculator.calculateAmount(response);
    $("#output-area").append(`<div><span class="output-amount ${calculator.to}">${convertedAmount}</span> (${glossary[calculator.to].name})</div>`);
  }
  addSymbols(glossary);
  $("section.output").show();
}

function addSymbols (glossary) {
  $(".output-amount").each(function () {
    let currency = $(this).attr("class").split(" ").pop();
    $(this)[glossary[currency].symbolPosition](glossary[currency].symbol);
  });
}

function checkCurrencies (calculator, response) {
  let checkTo = false;
  let checkFrom = false;
  for (const currency in response.conversion_rates) {
    if (calculator.to === currency || calculator.to === "All") {
      checkTo = true;
    }
    if (calculator.from === currency) {
      checkFrom = true;
    }
  }
  if (checkTo && checkFrom){
    return true;
  } else {
    return false;
  }
}