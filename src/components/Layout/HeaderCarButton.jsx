import React from 'react'
import CartIcon from '../Cart/CarIcon'
import classes from './HeaderCarButton.module.css';

const HeaderCarButton = (props) => {

  return (
    <button className={classes['button']} onClick = {props.onClick}>


      <span className={classes.icon} >
        <CartIcon/>
      </span>


      <span>Your cart: </span>
      <span className = {classes.badge}>3</span>

    </button>
  )
}

export default HeaderCarButton