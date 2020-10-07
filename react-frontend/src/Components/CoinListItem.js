import React, { useEffect, useState } from "react"

export default function CoinListItem() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
		fetch("http://127.0.0.1:5000/")
			.then((response) => response.json())
			.then((data) => {
				setPosts(data) 
			})
	}, [])

	return (
		<div>
			<h1>Cool app</h1>
			{posts.map((item) => (
				<li>
					<h2>{item.title}</h2>
					<p>{item.description}</p>
				</li>
			))}
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
