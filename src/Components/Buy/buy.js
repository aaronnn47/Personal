import React, {Component} from 'react'
import './buy.css'
import {Link} from 'react-router-dom'
import {updatePrice} from '../../ducks/reducer'
import {connect} from 'react-redux'
import home from './home_icon1.png'
import cart from './shopping_cart1.png'

class Buy extends Component{
    render(){
        return(
            <div className="app">

                <div className="nav">
                <Link to='/'><img src={home} alt=''/></Link>
                <img src={cart} alt=""/>
                </div>

                <div className="display">
                {this.props.price}
                </div>

                <div className="buttons">
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button>.</button>
                    <button>0</button>
                    <button>clear</button>
                </div>

                <div className="preview">
                    <button>preview</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        price: state.price
    }
}
export default connect(mapStateToProps, {updatePrice})(Buy)