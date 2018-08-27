import React, { Component } from 'react'
import './Home.css'
import {Link} from 'react-router-dom'
import axios from 'axios'
import home from './home.svg'
import cart from './shopping-cart.svg'
import avatar from './avatar.svg'
import banknote from './banknote.svg'

class Home extends Component {
    constructor() {
        super()

        this.state = {
            crypto_data: [],
            menuShow: false
        }
    }

    showMenu(){
        this.setState({
            menuShow: !this.state.menuShow
        })
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
                    <div className="hamburger"
                    onClick={()=>this.showMenu()}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </nav>
                <div className={(this.state.menuShow ? 'dropDownShow': '') + ' dropdown'}>
                    <ul>
                        <li>Men</li>
                        <li>Women</li>
                        <li>Kids</li>
                        <li>Accessories</li>
                    </ul>
                </div>

                <div className="body">
                    <h1>Bitcoin</h1>
                    {Math.round(this.state.crypto_data * 100) / 100}
                    <div></div>
                </div>

                <div className="buttons">
                    <Link to='/buy'>
                    <div>Buy</div>
                    </Link>
                    <div>Sell</div>
                </div>

                <div className="footer">
                    <Link to='/'>
                    <img src={home} alt="" />
                    </Link>

                    <Link to='/wallet' >
                    <img src={banknote} alt="" />
                    </Link>

                    <Link to='/cart' >
                    <img src={cart} alt="" />
                    </Link>

                    <Link to='/account'>
                    <img src={avatar} alt="" />
                    </Link>
                    
                </div>
            </div>
        )
    }
}

export default Home