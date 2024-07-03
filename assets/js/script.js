// API key and URL
async function getConversionRates() {
    const apiKey = 'fca_live_p3caMsuvonzfVSnDQ1ExFvibMriDIk2yOZvjJRZJ';
    const apiUrl = `https://api.freecurrencyapi.com/v1/latest?apikey=${apiKey}`;
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Fetch error: ', error);
    }
}
async function convertCurrency() {
    const conversionRates = await getConversionRates();
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
    document.getElementById('result').value = `Amount in ${targetCurrency}: ${convertedAmount.toFixed(2)}`;
}