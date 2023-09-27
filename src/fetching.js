import axios from 'axios';
    
    const API = 'b019c32f6e00c803a2325a8c';

    export const getExchangeRate = async (baseCurrency) => {
        try {
            const res = await axios.get(`https://v6.exchangerate-api.com/v6/${API}/latest/${baseCurrency}`);
            const d = res.data;
            const data = res.data.conversion_rates;
            console.log(data)
            return data;
        } catch(error) {
            console.error(error)
        }
    }

    export const convertCurrency = async(amount, fromCurrency, toCurrency) => {
        const exchangeRates = await getExchangeRate(fromCurrency);
        return amount * exchangeRates[toCurrency];
    }


    

