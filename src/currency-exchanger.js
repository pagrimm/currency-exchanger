export class ExchangeGlossary {
  constructor() {
    this.USD = {"name": "US Dollars", "symbol": "$"};
    this.AED = {"name": "UAE Dirham", "symbol": "د.إ"};
    this.ARS = {"name": "Argentine Pesos", "symbol": "$"};
    this.AUD = {"name": "Australian Dollars", "symbol": "$"};
    this.BGN = {"name": "Bulgarian Leva", "symbol": "лв"};
    this.BRL = {"name": "Brazilian Reals", "symbol": "R$"};
    this.BSD = {"name": "Bahamian Dollars", "symbol": "$"};
    this.CAD = {"name": "Canadian Dollars", "symbol": "$"};
    this.CHF = {"name": "Swiss Francs", "symbol": "CHf"};
    this.CLP = {"name": "Chilean Pesos", "symbol": "$"};
    this.CNY = {"name": "Yuan Renminbi", "symbol": "¥"};
    this.COP = {"name": "Colombian Pesos", "symbol": "$"};
    this.CZK = {"name": "Czech Korun", "symbol": "CZK"};
    this.DKK = {"name": "Danish Kroner", "symbol": "kr"};
    this.DOP = {"name": "Dominican Pesos", "symbol": ""};
    this.EGP = {"name": "Egyptian Pounds", "symbol": ""};
    this.EUR = {"name": "Euros", "symbol": ""};
    this.FJD = {"name": "Fiji Dollars", "symbol": ""};
    this.GBP = {"name": "Pounds Sterling", "symbol": ""};
    this.GTQ = {"name": "Guatemalan Quetzals", "symbol": ""};
    this.HKD = {"name": "Hong Kong Dollars", "symbol": ""};
    this.HRK = {"name": "Croatian Kune", "symbol": ""};
    this.HUF = {"name": "Hungarian Forints", "symbol": ""};
    this.IDR = {"name": "Indonesian Rupiahs", "symbol": ""};
    this.ILS = {"name": "New Israeli Sheqels", "symbol": ""};
    this.INR = {"name": "Indian Rupees", "symbol": ""};
    this.ISK = {"name": "Iceland Kronur", "symbol": ""};
    this.JPY = {"name": "Japanese Yen", "symbol": ""};
    this.KRW = {"name": "Korean Won", "symbol": ""};
    this.KZT = {"name": "Kazakh Tenge", "symbol": ""};
    this.MXN = {"name": "Mexican Pesos", "symbol": ""};
    this.MYR = {"name": "Malaysian Ringgit", "symbol": ""};
    this.NOK = {"name": "Norwegian Kroner", "symbol": ""};
    this.NZD = {"name": "New Zealand Dollars", "symbol": ""};
    this.PAB = {"name": "Panamanian Balboas", "symbol": ""};
    this.PEN = {"name": "Peruvian Nuevos Soles", "symbol": ""};
    this.PHP = {"name": "Philippine Pesos", "symbol": ""};
    this.PKR = {"name": "Pakistan Rupees", "symbol": ""};
    this.PLN = {"name": "Polish Zloty", "symbol": ""};
    this.PYG = {"name": "Paraguayan Guaranies", "symbol": ""};
    this.RON = {"name": "Romanian Lei", "symbol": ""};
    this.RUB = {"name": "Russian Rubles", "symbol": ""};
    this.SAR = {"name": "Saudi Riyals", "symbol": ""};
    this.SEK = {"name": "Swedish Kroner", "symbol": ""};
    this.SGD = {"name": "Singapore Dollars", "symbol": ""};
    this.THB = {"name": "Thailand Baht", "symbol": ""};
    this.TRY = {"name": "Turkish Lire", "symbol": ""};
    this.TWD = {"name": "New Taiwan Dollars", "symbol": ""};
    this.UAH = {"name": "Ukranian Hryvnia", "symbol": ""};
    this.UYU = {"name": "Pesos Uruguayos", "symbol": ""};
    this.ZAR = {"name": "South African Rand", "symbol": ""};
  }
}

export class ExchangeCalculator {
  constructor(amount, from, to) {
    this.amount = amount;
    this.from = from;
    this.to = to;
  }
  
  calculateAmount (response, to = this.to, from = this.from, amount = this.amount) {
    let outputAmount;
    if (from === "USD") {
      outputAmount = (amount * response.conversion_rates[to]).toFixed(2);
    } else {
      outputAmount = ((amount / response.conversion_rates[from]) * response.conversion_rates[to]).toFixed(2);
    }
    return outputAmount;
  }
}