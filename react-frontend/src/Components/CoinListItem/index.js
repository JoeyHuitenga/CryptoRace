import React from 'react'
import Coins from '../../Components/Coins'

class CoinListItem extends React.Component {

    state = {
        coins: []
      }

    componentDidMount() {
        fetch('/coins')
        .then(res => res.json())
        .then((data) => {
          this.setState({ coins: data })
        })
        .catch(console.log)
    }


        render () {       
            return (
            <Coins coins={this.state.coins} key={this.key} />
        )
    }
}

export default CoinListItem