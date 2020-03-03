import React,{Component} from 'react';
import classes from './App.module.css';
import Axios from 'axios';
import {Link} from 'react-router-dom';
import Loader from './loader';
import Carousel from './slider';

const Header=(props)=>{
  return(<header >
  <div className={classes.topbar}>
    <div className={classes.left}>
      <Link to={"/"} className={classes.anchor}>
  <img className={classes.logo} src="https://www.clipartmax.com/png/middle/16-164946_fichier-d-origine-svg-r-solution-de-shopping-bag-icon-transparent-background.png" alt="logo" />
  <span className={classes.title}>SHOPLANE</span>
    </Link>
    </div>
    <div className={classes.right}>
        <input placeholder="What are you looking for" className={classes.search}></input>
        <Link to={`/checkout`}  >
        <i className={["fas","fa-shopping-cart"].join(" ")}></i>
        <button className={classes.count}>{props.cartCount}</button>
        <i className={["fas","fa-user-circle"].join(" ")}></i>
        </Link>
    </div>
  </div>
</header>)
}
const Footer=()=>{
  return(
                    
    <footer>
    <div className={classes.list}>
        <ul className={classes.footerList}>
            <h3>ONLINE STORES</h3>
            <li>MEN CLOTHING</li>
            <li>WOMEN CLOTHING</li>
            <li>MEN ACCESSORIES</li>
            <li>WOMEN ACCESSORIES</li>
        </ul>
    </div>
    <div className={classes.list}>
        <ul className={classes.footerList}>
            <h3>HELPFUL LINKS</h3>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>CONTACTS</li>
        </ul>
    </div>
    <div className={classes.list}>
        <ul className={classes.footerList}>
            <h3>PARTNERS</h3>
            <li>PANTALOONS</li>
            <li>ZARA</li>
            <li>LEVIS</li>
            <li>UCB</li>
            <li>+MANY MORE</li>
        </ul>
    </div>
    <div className={classes.list}>
        <ul className={classes.footerList}>
            <h3>ADDRESS</h3>
            <li>BUILDING 101</li>
            <li>CENTER AVENUE</li>
            <li>LA-902722</li>
            <li>UNITED STATES</li>
        </ul>
    </div>
</footer>
  )
}

const Cards=(item)=>{
  return(
  <Link to={`/detail/${item.id}`} className={classes.Card} key={item.id} >     
  <div>                    
  <img src={item.preview} alt={item.name} className={classes.productPreview}/>
  <h3 className={classes.productName}>{item.name}</h3>
  <h5 className={classes.productBrand}>{item.brand}</h5>
  <h4 className={classes.productPrice}>Price : RS {item.price}</h4>
  </div>
</Link>)
}

class Homepage extends Component{
    state={
        Response:[],
        cartCount:0,
        dataLoaded:false
    }
    componentDidMount(){
        Axios.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
        .then((response)=>{
          this.setState({dataLoaded:!this.state.dataLoaded})
          console.log(response.data);
          this.setState({Response:response.data})
        })
        .catch((err)=>{
          console.log(err);
        })
    }
    render(){return(
            <div>
              {this.state.dataLoaded?
                <div className = {classes.App}>
                  <Carousel/>
                  <h1 className={classes.heading}>CLOTHINGS FOR MEN & WOMEN</h1>
                  {this.state.Response.map(item=>{
                    return(!item.isAccessory?Cards(item):null)
                  })}
                  <h1 className={classes.heading}>ACCESSORIES FOR MEN & WOMEN</h1>
                  {this.state.Response.map(item=>{
                    return(item.isAccessory?Cards(item):null)
                  })}
              </div>
              :<Loader/>
            }          
              
                </div>
            )
        }   
    }


export {Homepage,Header,Footer}