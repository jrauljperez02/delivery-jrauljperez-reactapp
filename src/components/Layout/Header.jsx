import React from 'react'
import './Header.module.css'
import { Fragment } from 'react'
import classes from './Header.module.css'
import HeaderCarButton from './HeaderCarButton'

const Header = (props) => {


  return (
    <Fragment>
        <header className={classes.header}>
          <h1>Food-Good</h1>
          <HeaderCarButton onClick = {props.onShowCart} />
        </header>
        
        <div className = {classes['main-image']}>
          <img alt = 'ReactMeals' src = {'https://wallpaperaccess.com/full/767277.jpg'} />
        </div>

        
    </Fragment>
  ) 
}

export default Header