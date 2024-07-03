// API key and URL

API_KEY = "fca_live_p3caMsuvonzfVSnDQ1ExFvibMriDIk2yOZvjJRZJ"
API_URL = "https://api.freecurrencyapi.com/v1/latest?apikey="

// Make a GET request
fetch(`${API_URL}${API_KEY}`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });



function convertCurrency() {
    // Conversion rates relative to USD
    const conversionRates = {
        USD: 1,
        EUR: 0.85,
        GBP: 0.76,
        JPY: 110.57,
        AUD: 1.35
    };
    // Get the amount from the input field
    const amount = parseFloat(document.getElementById('amount').value);
    // Get the selected source and target currencies
    const sourceCurrency = document.getElementById('sourceCurrency').value;
    const targetCurrency = document.getElementById('targetCurrency').value;
    // Get the conversion rates for the selected currencies
    const sourceToUSD = conversionRates[sourceCurrency];
    const targetFromUSD = conversionRates[targetCurrency];
    // Convert the amount to the target currency
    const amountInUSD = amount / sourceToUSD;
    const convertedAmount = amountInUSD * targetFromUSD;
    // Display the result
    document.getElementById('result').innerText = `Amount in ${targetCurrency}: ${convertedAmount.toFixed(2)}`;
}