import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import './Checkout.css'
import axios from 'axios'
import home from "./home.svg";
import cart from "./shopping-cart.svg";
import avatar from "./avatar.svg";
import banknote from "./banknote.svg";
import edit from './edit.svg'
import {connect} from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'


class Checkout extends Component{
    constructor(){
        super()
        this.state={
          shipping:[],
          editFirst: false,
          editLast: false,
          editAddress:false,
          editCity:false,
          editSt:false,
          editZip:false,
          bitcoin: 0,
          crypto_data: [],
          firstNameInput: 'hidden',
          lastNameInput: 'hidden',
          addressInput: 'hidden',
          cityInput: 'hidden',
          stInput: 'hidden',
          zipInput: 'hidden',
          firstNameIcon: 'block',
          lastNameIcon: 'block',
          addressIcon: 'block',
          cityIcon: 'block',
          stIcon: 'block',
          zipIcon: 'block',
        }
    }

    onToken = token => {
      token.card = void 0;
      axios
        .post("/api/payment", {
          token,
          amount: this.props.total * 100
        })
        .then(resp => {
          console.log(resp);
        });
    };

    showFirstInput(){
      this.setState({
        firstNameInput: 'text',
        firstNameIcon: 'none'
      })
    }
    showLastInput(){
      this.setState({
        lastNameInput: 'text',
        lastNameIcon: 'none'
      })
    }
    showAddressInput(){
      this.setState({
        addressInput: 'text',
        addressIcon: 'none'
      })
    }
    showCityInput(){
      this.setState({
        cityInput: 'text',
        cityIcon: 'none'
      })
    }
    showStInput(){
      this.setState({
        stInput: 'text',
        stIcon: 'none'
      })
    }
    showZipInput(){
      this.setState({
        zipInput: 'text',
        zipIcon: 'none'
      })
    }

    editFirstName(){
      axios.put('/editShippingFirstName',)
    }

    componentDidMount(){
      this.getShippingDetail()
      this.getWallet()
      this.getBitcoin()
    }

    getShippingDetail(){
      axios.get('/api/getShipping')
      .then(resp=>{
        this.setState({shipping:resp.data})
      })
    }

    getWallet(){
      axios.get('/api/getbitcoin')
      .then(resp=>{
        this.setState({bitcoin: resp.data[0].sum})
      })
    }

    getBitcoin() {
      axios.get('https://api.coinmarketcap.com/v2/ticker/1/')
      .then(resp => {
        this.setState({ crypto_data: resp.data.data.quotes.USD.price })
      })
    }

    sellBitcoin(obj){
      axios.post('/api/sellTransactions',obj)
    }

    showMenu() {
        this.setState({
          menuShow: !this.state.menuShow
        });
      }

    render(){
    console.log(this.state.bitcoin)
    console.log(this.state.editFirst)
    console.log(this.state.crypto_data)
    let shippingInfo = this.state.shipping.map((ele,i)=>{
      return(
        <div key={i} className='mapped-shipping'>
          <h1>Checkout</h1>
          <div className='ele-div'>
            <div>{ele.firstname}</div>
            <img src={edit} alt=''
            onClick={()=>this.showFirstInput()}
            style={{display:`${this.state.firstNameIcon}`}}
            />
            <input type={this.state.firstNameInput}/>
          
          </div>

          <div className='ele-div'>
            <div>{ele.lastname}</div>
            <img src={edit} alt=''
            onClick={()=>this.showLastInput()}
            style={{display:`${this.state.lastNameIcon}`}}
            />
            <input type={this.state.lastNameInput}/>
          </div>

          <div className='ele-div'>
          <div>{ele.address}</div>
          <img src={edit} alt=''
          onClick={()=>this.showAddressInput()}
          style={{display:`${this.state.addressIcon}`}}          
          />
          <input type={this.state.addressInput}/>
          </div>

          <div className='ele-div'>
          <div>{ele.city}</div>
          <img src={edit} alt=''
          onClick={()=>this.showCityInput()}
          style={{display:`${this.state.cityIcon}`}}          
          />
          <input type={this.state.cityInput}/>
          </div>

          <div className='ele-div'>
          <div>{ele.st}</div>
          <img src={edit} alt=''
          onClick={()=>this.showStInput()}
          style={{display:`${this.state.stIcon}`}}           
          />
          <input type={this.state.stInput}/>
          </div>

          <div className='ele-div'>
          <div>{ele.zip}</div>
          <img src={edit} alt=''
          onClick={()=>this.showZipInput()}
          style={{display:`${this.state.zipIcon}`}}           
          />
          <input type={this.state.zipInput}/>
          </div>
        </div>
      )
    })
    
    return(
    <div className="background">
        <nav>
          <div>Checkout</div>
          <div className="hamburger" onClick={() => this.showMenu()}>
            <div />
            <div />
            <div />
          </div>
        </nav>

        <div
        className={(this.state.menuShow ? "dropDownShow" : "") + " dropdown"}
        >
          <ul>
            <Link to="/mens">
              <li>Mens</li>
            </Link>

            <Link to="/womens">
              <li>Womens</li>
            </Link>

            <Link to="/kids">
              <li>Kids</li>
            </Link>

            <Link to="/accessories">
              <li>Accessories</li>
            </Link>
            <Link to="/hats">
              <li>Hats</li>
            </Link>
          </ul>
        </div>

        <div className="checkout-container">
          {shippingInfo}
          <button type={{visibility:'hidden'}}>Save</button>
          <div>Total: {this.props.total}.00</div>
          <div>BTC: {parseFloat(this.props.total/this.state.crypto_data).toFixed(8)}</div>
          <button className='checkout-bitcoin' onClick={()=>this.sellBitcoin({price:this.props.total})}
          >Pay With Bitcoin</button>
          <StripeCheckout
              name="Clonebase"
              description="Thank you for your purchase"
              image="http://via.placeholder.com/100x100"
              token={this.onToken}
              stripeKey={process.env.REACT_APP_STRIPE_KEY}
              amount={this.props.total * 100}
            />
        </div>


        <div className="footer">
        <Link to="/home">
        <img src={home} alt="" />
        </Link>

        <Link to="/wallet">
        <img src={banknote} alt="" />
        </Link>

        <Link to="/cart">
        <img src={cart} alt="" />
        </Link>

        <Link to="/account">
        <img src={avatar} alt="" />
        </Link>
        </div>

    </div>
    )
    }

}

function mapStateToProps(state){
  return{
    total:state.total
  }
}

export default connect(mapStateToProps,{})(Checkout)