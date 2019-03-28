export const fetchData = (that, pairs) => {
    for (let i in pairs) {
        let pair = pairs[i];
        let pairInv = pair.split('-').reverse().join('-');
        fetch('https://cors.io/?https://api.cryptonator.com/api/ticker/' + pair)
            .then(response => response.json())
            .then(data => {
                that.props.updateExchangeRate({
                    ...that.props.exchangeRate,
                    [pair]: +data.ticker.price,
                    [pairInv]: 1 / data.ticker.price
                })
            })
    }
}