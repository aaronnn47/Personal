import React,{Component} from 'react'
import './Wallet.css'
import avatar from './avatar.svg'
import banknote from './banknote.svg'
import home from './home.svg'
import cart from './shopping-cart.svg'

class Account extends Component{
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

    render(){
        return(
            <div>
                <nav>
                    <div>Wallet</div>
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
                    {/* <Link to='/buy'> */}
                    <div>Send</div>
                    {/* </Link> */}
                    <div>Receive</div>
                </div>

                <div className="footer">
                    <img src={home} alt="" />
                    {/* <Link to='/account' > */}
                    <img src={banknote} alt="" />
                    {/* </Link> */}
                    <img src={cart} alt="" />
                    <img src={avatar} alt="" />
                    
                </div>
            </div>
        )
    }
}

export default Account