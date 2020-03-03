import React,{Component} from 'react';
import classes from './ProductDetail.module.css'
import Axios from 'axios';
import Loader from './loader'
//default image https://aliceasmartialarts.com/wp-content/uploads/2017/04/default-image.jpg
class Detail extends Component
{
    state={
        currentProduct:[],
        previewPics:[],
        currentPreview:0,
        currentPic:null,
        dataLoaded:false,
        width:0
    }
    previewContainer=()=>
    {
        return(
            <div className={classes.prvwContainer}>
                    {
                        this.state.previewPics.length?this.state.previewPics.map((item,pos)=>{
                            return(<img src={item} alt="preview" className={[classes.previews,this.state.currentPreview===pos?classes.activeClass:null].join(" ")} key={pos} onClick={()=>{this.onPreviewClick(item,pos)}} />)
                        }):null
                    }
            </div>
        )
    }
    componentDidMount(){
        Axios.get(`https://5d76bf96515d1a0014085cf9.mockapi.io/product/${this.props.match.params.id}`)
        .then((response)=>{
            this.setState({dataLoaded:!this.state.dataLoaded})
            response.data.count=0;
            this.setState({currentProduct:response.data,previewPics:response.data.photos,width:window.innerWidth});
            console.log(this.state.currentProduct)
        })
        .catch(err=>{console.log(err)})
    }
    onPreviewClick=(item,pos)=>{
        this.setState({currentPreview:pos,currentPic:item})
    }
    render(){
        return(
            
        <div>
            {this.state.dataLoaded?
            <div className={classes.mainBody}>
                <div className={classes.imageContainer}>
                    <img className={classes.previewImage} src={this.state.currentPic===null?this.state.currentProduct.preview:this.state.currentPic} alt="previewImage"/>
                </div>
                {this.state.width<720?this.previewContainer():null}
                <div className={classes.DESC}>
                    <h1 className={classes.descName}>{this.state.currentProduct.name}</h1>
                    <h5 className={classes.descBrand}>{this.state.currentProduct.brand}</h5>
                    <h3 className={classes.descPrice}>{`Price : RS ${this.state.currentProduct.price}`}</h3>
                    <h4 className={classes.descrpt}>Description</h4>
                    <p className={classes.descText}>{this.state.currentProduct.description}</p>
                    {this.state.width>720?this.previewContainer():null}
                    <button className={classes.btnAdd} onClick={()=>{this.props.onAddToCartClick(this.state.currentProduct)}}>ADD TO CART</button>
                </div>
    </div>:<Loader/>}
        
        </div>
        )
    }
}

export default Detail;