import React,{useContext} from 'react'
import CartIcon from '../Cart/CarIcon'
import classes from './HeaderCarButton.module.css';
import CartContext from '../../store/cart-context'

const HeaderCarButton = (props) => {

  const cartCtx = useContext(CartContext)
  const numberOfCartItems = cartCtx.items.reduce((curNumber,item) => {
    return curNumber + item.amount
  },0);




  return (
    <button className={classes['button']} onClick = {props.onClick}>


      <span className={classes.icon} >
        <CartIcon/>
      </span>


      <span>Your cart: </span>
      <span className = {classes.badge}>{numberOfCartItems}</span>

    </button>
  )
}

export default HeaderCarButton