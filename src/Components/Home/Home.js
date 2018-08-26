import React, { Component } from 'react'

import './Home.css'
import axios from 'axios'
import home from './home_icon1.png'
import cart from './shopping_cart1.png'
import account from './account_image.png'
import settings from './settings_icon.png'

class Home extends Component {
    constructor() {
        super()

        this.state = {
            crypto_data: []
        }
    }

    componentDidMount() {
        axios.get('https://api.coinmarketcap.com/v2/ticker/1/')
            .then(resp => {
                this.setState({ crypto_data: resp.data.data.quotes.USD.price })
            })
    }

    render() {

        return (
            <div>
                <nav>
                    <div>Coinspace</div>
                    <div className="hamburger">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </nav>

                <div className="body">
                    <h1>Bitcoin</h1>
                    {Math.round(this.state.crypto_data * 100) / 100}
                    <div></div>
                </div>

                <div className="buttons">
                    <button>Buy</button>
                    <button>Sell</button>
                </div>

                <div className="footer">
                    <img src={home} alt="" />
                    <img src={account} alt="" />
                    <img src={cart} alt="" />
                    <img src={settings} alt="" />
                </div>
            </div>
        )
    }
}

export default Home