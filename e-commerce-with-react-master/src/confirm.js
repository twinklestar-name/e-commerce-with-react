import React from 'react';
import classes from './confirm.module.css'

function Confirm()
{
    return(
    <div className={classes.body}>
        <img className={classes.success} src="http://pngriver.com/wp-content/uploads/2018/04/Download-Success-PNG-Image.png" alt=""/>
        <h1 className={classes.msg}>Order Placed Successfully!!!</h1>
        <h3 className={classes.msg}>We have sent you an email with the order details</h3>
    </div>)
}

export default Confirm;
