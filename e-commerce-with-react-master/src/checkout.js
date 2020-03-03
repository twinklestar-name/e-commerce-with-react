import React,{Component} from 'react'
import classes from './checkout.module.css'
import {Link} from 'react-router-dom';
import EmptyCart from './EmptyCart'

let totalAmount=0

class checkout extends Component{
    render(){
        return(
            this.props.cartCount?
            <div className={classes.body}>
                <div className={classes.Cartlist}>
                    {this.props.productlist.map((item,pos)=>{
                        totalAmount+=item.price*item.count
                        return(<li className={classes.listItem} key={pos}>
                                            <div className={classes.cartItemPreview}>
                                                <img src={item.preview} alt="Preview" className={classes.cartPreview}/>
                                            </div>
                                            <div className={classes.cartItemInfo}>
                                                <h3 className={classes.cartName}>{item.name}</h3>
                                                <p className={classes.itemCount}>count: {item.count}</p>
                    <p className={classes.itemPrice}>Amount:<br/> {item.count}*{item.price}=Rs {item.price*item.count}</p>
                    
                                            </div>
                                </li>)
                    })}
                </div>
                <div className={classes.orderBrief}>
                    <h1 className={classes.orderBriefHeading}>Total Amount</h1>
                <p className={classes.orderBriefAmount}>Amount : RS {totalAmount}</p>
                <Link to={"/order-confirmed"}>
                    <button className={classes.placeOrder} onClick={()=>{this.props.cartClear()}}>Place Order</button>
                </Link>
                </div>
            </div>:<EmptyCart/>
        )
    }
    
}
export default checkout