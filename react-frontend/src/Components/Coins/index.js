import React from 'react';

const Coins = ({ coins }) => {
    
    return (
            coins.map((coins) => (
                <div key={this.state.key} className="item-box">
                <h1 className="coin-name">{coins.id}</h1>
                <div className="gains-box">
                    <div className="gains-daily">
                        <h5 className="gains-title">Daily gains</h5>
                        <h3>{coins.gains_daily}<span className="percentage">%</span></h3>
                    </div>
                    <div className="gains-weekly">
                        <h5 className="gains-title">Weekly gains</h5>
                        <h3>{coins.weekly_daily}<span className="percentage">%</span></h3>
                    </div>
                    <div className="gains-monthly">
                        <h5 className="gains-title">Monthly gains</h5>
                        <h3>{coins.monthly_daily}<span className="percentage">%</span></h3>
                    </div>
                </div>
                </div>
            )
        )
    )
};


  export default Coins
