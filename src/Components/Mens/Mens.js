import React,{Component} from 'react'
import './Mens.css'
import {Link} from 'react-router-dom'
import avatar from './avatar.svg'
import banknote from './banknote.svg'
import home from './home.svg'
import cart from './shopping-cart.svg'

class Mens extends Component{
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

    render(){
        return(
            <div>
                <nav>
                    <div>Mens</div>
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

                <div className="mens">
                    
                </div>

                    <div className="footer">
                    <Link to='/home' className="link">
                    <img src={home} alt="" />
                    </Link>
                    <Link to='/account' className="link">
                    <img src={banknote} alt="" />
                    </Link>
                    <Link to='/cart' className="link">
                    <img src={cart} alt="" />
                    </Link>
                    <Link to='/account' className="link">
                    <img src={avatar} alt="" />
                    </Link>
                    
                </div>

            </div>
        )
    }
}

export default Mens