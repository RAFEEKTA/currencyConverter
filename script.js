let api = `https://v6.exchangerate-api.com/v6/fb283e5d57b693dcddae46d1/latest/USD`
const fromDropdown = document.getElementById('from')
const toDropdown = document.getElementById('to')
result = document.getElementById('result')



currncies.forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency;
    option.text = currency;
    fromDropdown.add(option);


});
currncies.forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency;
    option.text = currency;
    toDropdown.add(option);
});

fromDropdown.value = 'USD'
toDropdown.value = 'INR'

let convertCurrency = () => {
    amount = document.getElementById('amount').value;
    fromCurrency = fromDropdown.value;
    toCurrency = toDropdown.value;
    if (amount.length != 0) {
        fetch(api).then((resp) => resp.json())
            .then((data) => {
                fromExchangeRtae = data.conversion_rates
                [fromCurrency];
                toExchangeRate = data.conversion_rates
                [toCurrency];
                const convertedAmont = (amount / fromExchangeRtae) * toExchangeRate;
                result.innerHTML = `${amount} ${fromCurrency} = ${convertedAmont} ${toCurrency}
                `

            })
    }
    else {
        alert("please fill the amount")
    }
}
document
    .querySelector('.convert')
    .addEventListener('click', convertCurrency)
window.addEventListener('load', convertCurrency)