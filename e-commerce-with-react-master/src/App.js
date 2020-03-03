import React,{Component} from 'react';
import {Route,BrowserRouter,Switch} from 'react-router-dom';
import {Homepage, Header, Footer} from './Homepage';
import Detail from './ProductDetail'
import Checkout from './checkout';
import Confirm from './confirm';
let cartItem=[];

class App extends Component{
  state={
    cartCount:0,
  }
  onAddToCartClick=(product)=>{
    this.setState({cartCount:this.state.cartCount+1});
    product.count=++product.count;
    this.addToCart(product)
  }
  addToCart=(product)=>{  
    if(cartItem.length===0)
      cartItem.push(product);
    else
    {
      cartItem.map(item=>{
        if(item.id===product.id)
          item.count++
        else
            cartItem.push(product);
      })
    }
      
  }
  cartClear=()=>{
    this.setState({cartCount:0});
    cartItem=[];
  }
  render(){
    return(
      <div>
        <BrowserRouter>
          <Header cartCount={this.state.cartCount} />
          <Switch>
          <Route path="/detail/:id" render={(props) =>
                        <Detail {...props} 
                          onAddToCartClick={this.onAddToCartClick}
                        />
                    }
                  />
            <Route path="/checkout" render={(props) => 
                    <Checkout {...props}
                    cartCount={this.state.cartCount}
                    productlist={cartItem}
                    cartClear={this.cartClear}  
                    />}
            />
            <Route path="/order-confirmed" component={Confirm}/>
            <Route path="/" component={Homepage} />
          </Switch>
        </BrowserRouter>
        <Footer/>
    </div>
    )
  }
  
}
export default App;