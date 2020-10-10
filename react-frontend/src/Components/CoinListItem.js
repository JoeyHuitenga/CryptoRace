import React, { useEffect, useState } from "react"

function useCoins() {
	const [coins, setCoins] = useState([])

	useEffect(() => {
		console.log('useEffect called!')
		fetch("http://127.0.0.1:5000/coins")
			.then((response) => response.json())
			.then((data) => {
				setCoins(data.Coins) 
			})
	}, [])

	console.log(coins);

	return coins
}

export default function CoinListItem() {
	const coins = useCoins() 

	console.log(coins)

	if (coins.length === 0) {
		console.log('ik heb niks')
		return (
			<h1>Coins are loading...</h1>
		);	
	} 

	return (
		<div className="item-wrapper">
			{coins.length > 0 ? (
				coins.map((coin) => (
				<div className="item-box">
                	<h1 className="coin-name">{coin.id}</h1>
					<div className="gains-box">
						<div className="gains-daily">
							<h5 className="gains-title">Daily gains</h5>
							<h3>{coin.gains_daily}<span className="percentage">%</span></h3>
						</div>
						<div className="gains-weekly">
							<h5 className="gains-title">Weekly gains</h5>
							<h3>{coin.gains_weekly}<span className="percentage">%</span></h3>
						</div>
						<div className="gains-monthly">
							<h5 className="gains-title">Monthly gains</h5>
							<h3>{coin.gains_monthly}<span className="percentage">%</span></h3>
						</div>
					</div>
                </div>
				))
			) : (
				<h1>Yeah</h1>
			)}
		</div>
	)
}





// function CoinListItem() {

//     state = {
//         coins: []
//       }

//     componentDidMount() {
//         fetch('/Coins')
//         .then(res => res.json())
//         .then((data) => {
//           this.setState({ coins: data })
//         })
//         .catch(console.log)
//     }
    
//     const cors = 'https://cors-anywhere.herokuapp.com/';
//     const site = 'http://127.0.0.1:5000/';
//     const url = cors + site;
//     const [coin, setCoin] = useState(null) 

//     useEffect(() => {
//         axios.get(url)
//             .then(response => {
//                 setCoin(response.data)
//             })
//     }, [url])
     
//     if(coin) {
//         return (
//             <div>
//             <h1>{coin.id}</h1>
//             <Coins coins={this.state.coins} />
//             </div>
//         )
//     }

//     return(
//         <h1>coin is missing</h1>    
//     )
// }
