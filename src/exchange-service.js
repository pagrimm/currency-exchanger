export class ExchangeService {
  async getExchange(currency) {
    if (!sessionStorage.getItem(`${currency}Response`)) {
      try {
        let response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${currency}`);
        let jsonResponse;
        if (response.ok && response.status == 200) {
          jsonResponse = await response.json();
        } else {
          jsonResponse = false;
        }
        sessionStorage.setItem(`${currency}Response`, jsonResponse);
        return jsonResponse;
      } catch(error) {
        return false;
      }
    } else {
      return sessionStorage.getItem(`${currency}Response`)
    }
  }
}