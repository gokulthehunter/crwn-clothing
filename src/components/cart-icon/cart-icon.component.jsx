import React from 'react';
import {ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import {connect} from 'react-redux';

import {ToggleCartHidden} from '../../redux/cart/cart.action';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';

import './cart-icon.styles.scss';

const CartIcon = ({ToggleCartHidden,itemCount}) => (
    <div className="cart-icon" onClick={ToggleCartHidden}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">{itemCount}</span>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    ToggleCartHidden: () => dispatch( ToggleCartHidden() )
})
// const mapStateProps = ({ cart:{cartItems} }) => ({
//     itemCount: cartItems.reduce((accumalatedQuantity,cartItem) => accumalatedQuantity + cartItem.quantity,0)
// })
//reselect package way (memoize selector)
const mapStateProps = (state) => ({
    itemCount: selectCartItemsCount(state)
})

export default connect(mapStateProps,mapDispatchToProps)(CartIcon);