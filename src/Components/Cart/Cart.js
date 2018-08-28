import React, { Component } from 'react'
import './Cart.css'
import {Link} from 'react-router-dom'
import axios from 'axios'
import home from './home.svg'
import cart from './shopping-cart.svg'
import avatar from './avatar.svg'
import banknote from './banknote.svg'

class Cart extends Component {
    constructor() {
        super()

        this.state = {
            menuShow: false
        }
    }

    showMenu(){
        this.setState({
            menuShow: !this.state.menuShow
        })
    }

    render() {
        return (
            <div>
                <nav>
                    <div>Cart</div>
                    <div className="hamburger"
                    onClick={()=>this.showMenu()}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </nav>

                <div className={(this.state.menuShow ? 'dropDownShow': '') + ' dropdown'}>
                    <ul>
                        <Link to='/mens'>
                        <li>Men</li>
                        </Link>

                        <Link to='/womens'>
                        <li>Women</li>
                        </Link>
                        
                        <Link to='/kids'>
                        <li>Kids</li>
                        </Link>

                        <Link to='/accessories'>
                        <li>Accessories</li>
                        </Link>
                    </ul>
                </div>

                <div className="cart-container">
                    <div></div>
                </div>

                <div className="bottom-container">
                </div>

                <div className="footer">
                    <Link to='/home'>
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

export default Cart