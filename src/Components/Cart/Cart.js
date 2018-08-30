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
            menuShow: false,
            cart: []
        }
    }

    componentDidMount(){
        axios.get('/api/getcart')
        .then(resp=>{
            this.setState({cart:resp.data})
        })
    }

    showMenu(){
        this.setState({
            menuShow: !this.state.menuShow
        })
    }

    render() {
        console.log(this.state.cart)
        
        let newCart = []
        for (var i = 0; i < this.state.cart.length; i++){
            let flag = false
            for (var j = 0; j < newCart.length;j++){
                if(this.state.cart[i].id === newCart[j].id){
                    newCart[j].quantity++
                    flag = true
                }
            }
            if(!flag){
                newCart.push(Object.assign({},this.state.cart[i],{quantity:1}))
            }
        }
        
        let mappedcart = newCart.map((ele,i)=>{
            return(
                <div key={i} className="mapped-cart">
                    <img src={ele.image} alt=""/>
                    <div>{ele.description}</div>
                    <div>{ele.quantity}</div>
                </div>
            )
        })

        return (
            <div className="background">
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
                        <li>Mens</li>
                        </Link>

                        <Link to='/womens'>
                        <li>Womens</li>
                        </Link>
                        
                        <Link to='/kids'>
                        <li>Kids</li>
                        </Link>

                        <Link to='/accessories'>
                        <li>Accessories</li>
                        </Link>
                        <Link to='/hats'>
                        <li>Hats</li>
                        </Link>
                    </ul>
                </div>

                <div className="description">
                    <p>Image</p>
                    <p>Description</p>
                    <p>Quantity</p>
                    
                </div>

                <div className="cart-container">
                    {mappedcart}
                </div>

                <div className="bottom-cart-div">
                    <button>Pay With Card</button>
                    <button>Pay with Bitcoin</button>
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