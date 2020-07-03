export class ExchangeGlossary {
  constructor() {
    this.USD = {"name": "US dollars", "symbol": "$", "symbolPosition": "before"};
    this.AED = {"name": "UAE dirham", "symbol": "د.إ", "symbolPosition": "after"};
    this.ARS = {"name": "Argentine pesos", "symbol": "$", "symbolPosition": "before"};
    this.AUD = {"name": "Australian dollars", "symbol": "$", "symbolPosition": "before"};
    this.BGN = {"name": "Bulgarian leva", "symbol": " лв", "symbolPosition": "after"};
    this.BRL = {"name": "Brazilian reals", "symbol": "R$", "symbolPosition": "before"};
    this.BSD = {"name": "Bahamian dollars", "symbol": "$", "symbolPosition": "before"};
    this.CAD = {"name": "Canadian dollars", "symbol": "$", "symbolPosition": "before"};
    this.CHF = {"name": "Swiss francs", "symbol": " CHF", "symbolPosition": "after"};
    this.CLP = {"name": "Chilean pesos", "symbol": "$", "symbolPosition": "before"};
    this.CNY = {"name": "Chinese yuan", "symbol": "¥", "symbolPosition": "before"};
    this.COP = {"name": "Colombian pesos", "symbol": "$", "symbolPosition": "before"};
    this.CZK = {"name": "Czech korun", "symbol": " Kč", "symbolPosition": "after"};
    this.DKK = {"name": "Danish kroner", "symbol": " kr.", "symbolPosition": "after"};
    this.DOP = {"name": "Dominican pesos", "symbol": "RD$", "symbolPosition": "before"};
    this.EGP = {"name": "Egyptian pounds", "symbol": "E£", "symbolPosition": "before"};
    this.EUR = {"name": "Euros", "symbol": "€", "symbolPosition": "before"};
    this.FJD = {"name": "Fijian dollars", "symbol": "FJ$", "symbolPosition": "before"};
    this.GBP = {"name": "Pounds sterling", "symbol": "£", "symbolPosition": "before"};
    this.GTQ = {"name": "Guatemalan quetzals", "symbol": "Q", "symbolPosition": "before"};
    this.HKD = {"name": "Hong Kong dollars", "symbol": "HK$", "symbolPosition": "before"};
    this.HRK = {"name": "Croatian kune", "symbol": " kn", "symbolPosition": "after"};
    this.HUF = {"name": "Hungarian forints", "symbol": " Ft", "symbolPosition": "after"};
    this.IDR = {"name": "Indonesian rupiahs", "symbol": "Rp", "symbolPosition": "before"};
    this.ILS = {"name": "Israeli new shekels", "symbol": "₪", "symbolPosition": "before"};
    this.INR = {"name": "Indian rupees", "symbol": "₹", "symbolPosition": "before"};
    this.ISK = {"name": "Icelandic kronur", "symbol": " kr", "symbolPosition": "after"};
    this.JPY = {"name": "Japanese yen", "symbol": "¥", "symbolPosition": "before"};
    this.KRW = {"name": "South Korean won", "symbol": "₩", "symbolPosition": "before"};
    this.KZT = {"name": "Kazakhstani tenge", "symbol": "₸", "symbolPosition": "before"};
    this.MXN = {"name": "Mexican pesos", "symbol": "$", "symbolPosition": "before"};
    this.MYR = {"name": "Malaysian ringgit", "symbol": "RM", "symbolPosition": "before"};
    this.NOK = {"name": "Norwegian kroner", "symbol": " kr", "symbolPosition": "after"};
    this.NZD = {"name": "New Zealand dollars", "symbol": "NZ$", "symbolPosition": "before"};
    this.PAB = {"name": "Panamanian balboas", "symbol": "B/. ", "symbolPosition": "before"};
    this.PEN = {"name": "Peruvian soles", "symbol": "S/. ", "symbolPosition": "before"};
    this.PHP = {"name": "Philippine pesos", "symbol": "₱", "symbolPosition": "before"};
    this.PKR = {"name": "Pakistani rupees", "symbol": "₨ ", "symbolPosition": "before"};
    this.PLN = {"name": "Polish zloty", "symbol": " zł", "symbolPosition": "after"};
    this.PYG = {"name": "Paraguayan guaranies", "symbol": "₲", "symbolPosition": "before"};
    this.RON = {"name": "Romanian lei", "symbol": " L", "symbolPosition": "after"};
    this.RUB = {"name": "Russian rubles", "symbol": "₽", "symbolPosition": "after"};
    this.SAR = {"name": "Saudi riyals", "symbol": "ر.س", "symbolPosition": "after"};
    this.SEK = {"name": "Swedish kroner", "symbol": " kr", "symbolPosition": "after"};
    this.SGD = {"name": "Singapore dollars", "symbol": "S$", "symbolPosition": "before"};
    this.THB = {"name": "Thai baht", "symbol": "฿", "symbolPosition": "before"};
    this.TRY = {"name": "Turkish lire", "symbol": "₺", "symbolPosition": "before"};
    this.TWD = {"name": "New Taiwan dollars", "symbol": "NT$", "symbolPosition": "before"};
    this.UAH = {"name": "Ukranian hryvnia", "symbol": "₴", "symbolPosition": "before"};
    this.UYU = {"name": "Uruguayan pesos", "symbol": "$U", "symbolPosition": "before"};
    this.ZAR = {"name": "South African Rand", "symbol": "R ", "symbolPosition": "before"};
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