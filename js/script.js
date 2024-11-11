const currencyOne = document.querySelector("#currency-one");
const amountOne = document.querySelector(".amount-one");
const amountTwo = document.querySelector(".amount-two");
const rateInfo = document.querySelector(".rate-info");

// funkcja przeliczająca waluty
const calculate = () => {
	const currOne = currencyOne.value;
	const url = `https://api.nbp.pl/api/exchangerates/rates/a/${currOne}`;
	console.log(url);

	fetch(url)
		.then(res => res.json())
		.then(data => {
			const currency1 = currencyOne.value;
			console.log(currency1);

			console.log(data.rates[0]);
			const rate = data.rates[0].mid;
			rateInfo.textContent = `1 ${currency1} = ${rate.toFixed(4)} PLN`;
			console.log(rate);

			amountTwo.value = (amountOne.value * rate).toFixed(2);
			console.log(parseFloat(amountTwo.value));
		});
};

currencyOne.addEventListener("change", calculate);
amountOne.addEventListener("input", calculate);
calculate();
