// src/Utlis.js

export const fetchData = (that, pairs) => {
    for (let i in pairs) {
        let pair = pairs[i];
        let pairInv = pair.split('-').reverse().join('-');
        fetch('https://cors.io/?https://api.cryptonator.com/api/ticker/' + pair)
            .then(function(response){
                if(response.ok){
                    return response.json()
                }
                throw new Error('Network response was not ok')
            })
            .then(function(data) {
                that.props.updateExchangeRate({
                    ...that.props.exchangeRate,
                    [pair]: +data.ticker.price,
                    [pairInv]: 1 / data.ticker.price
                })
            })
            .catch(function(error){
                console.log('API not available')
            })
    }
}