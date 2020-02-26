import React from 'react';
import {withRouter} from 'react-router-dom';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {ToggleCartHidden} from '../../redux/cart/cart.action';

const CartDropdown = ({cartItems,history,dispatch}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length ?
                cartItems.map(cartItem =>(
                    <CartItem key={cartItem.id} item={cartItem}/>
                ))
                : <span className="empty-message">Your Cart is empty</span>
            }
        </div>
        {/* <CartItemComponent/> */}
        <CustomButton onClick={() => {
            history.push('/checkout')
            dispatch(ToggleCartHidden())
        }}>GO TO CHECKOUT</CustomButton>
    </div>
)

// const mapStateToProps = ({ cart : {cartItems} }) => ({
//     cartItems
// })
// memoize using reselect package
const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems
})


export default withRouter( connect(mapStateToProps)(CartDropdown) );