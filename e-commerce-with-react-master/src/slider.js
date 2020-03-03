import React,{Component} from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from './slider.module.css';

class Carousel extends Component
{
    banner=[
        {
            id:1,
            image:"https://i.imgur.com/96OnkX7.png"
        },
        {
            id:2,
            image:"https://i.imgur.com/KtGxwnN.png",
        },
        {
            id:3,
            image:"https://i.imgur.com/sfjg9R8.png",
        },
        {
            id:4,
            image:"https://i.imgur.com/p0wdadG.png"
        }
    ]
    render(){
        var settings={
            infinite:true,
            dots:true,
            speed:300,
            slidesToShow:1,
            slidesToScroll:1,
            width:80,
            height:100,
            autoplay:true,
            autoplaySpeed: 5000,
        }
        return(
            <Slider className={classes.slider} {...settings}>
                    {this.banner.map((item)=>{
                        return(<img src={item.image} pos={item.id} alt="Banner"/>)
                    })}
            </Slider>
        )
    }
}
export default Carousel;