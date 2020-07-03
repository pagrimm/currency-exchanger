export class ExchangeService {
  async getExchange() {
    if (!sessionStorage.getItem(`exchangeResponse`)) {
      try {
        let response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
        let output;
        if (response.ok && response.status == 200) {
          output = [true];
          let jsonResponse = await response.json();
          sessionStorage.setItem(`exchangeResponse`, JSON.stringify(jsonResponse));
          output.push(jsonResponse);
        } else {
          output = [false];
          output.push(response);
        }
        return output;
      } catch(error) {
        return [false];
      }
    } else {
      let output = [true];
      output.push(JSON.parse(sessionStorage.getItem(`exchangeResponse`)));
      return output;
    }
  }
}