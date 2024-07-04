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

// Validate the amount input
function validateAmount() {
    var amountInput = document.getElementById('amount');
    var amountValue = amountInput.value.trim();

    // is the input a valid number
    if (isNaN(amountValue) || amountValue === '') {
        document.getElementById('result').value = 'Invalid Input!';
        amountInput.value = '';
        return false;
    }

    // Convert the value to a number
    var amount = parseFloat(amountValue);

    // Set sensible limits for currency conversion
    var minAmount = 0.01; 
    var maxAmount = 1000000000;

    // Is amount within the limits
    if (amount < minAmount || amount > maxAmount) {
        document.getElementById('result').value = 'Invalid Input!';
        amountInput.value = '';
        return false;
    }

    // If all validation passes, return true
    return true;
}

async function convertCurrency() {
    // Validate the input
    if (!validateAmount()) {
        return;
    }
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
    // Display the result. Output is three decimal places as number is rounded up
    document.getElementById('result').value = `Amount in ${targetCurrency}: ${convertedAmount.toLocaleString(undefined, {minimumFractionDigits: 3, maximumFractionDigits: 3})}`;
}