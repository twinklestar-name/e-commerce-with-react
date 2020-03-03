import React from 'react'
import classes from './EmptyCart.module.css'

const EmptyCart=()=>{
    return(    
    <div className={classes.EmptyCart}>
        <img src="https://i.pinimg.com/originals/2e/ac/fa/2eacfa305d7715bdcd86bb4956209038.png" className={classes.empty} alt="Cart Is Empty"/>
    </div>)
    
}

export default EmptyCart