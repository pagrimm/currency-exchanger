export class ExchangeService {
  async getExchange() {
    if (!sessionStorage.getItem(`exchangeResponse`)) {
      try {
        let response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
        let jsonResponse;
        if (response.ok && response.status == 200) {
          jsonResponse = await response.json();
        } else {
          jsonResponse = false;
        }
        sessionStorage.setItem(`exchangeResponse`, JSON.stringify(jsonResponse));
        return jsonResponse;
      } catch(error) {
        return false;
      }
    } else {
      let response = JSON.parse(sessionStorage.getItem(`exchangeResponse`));
      return response;
    }
  }
}