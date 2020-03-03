import Loader from 'react-loader-spinner'
import React,{Component} from 'react'
import classes from './loader.module.css'
class Load extends Component
{
    render(){
        return(
            <div className={classes.loader}>
            <Loader
                type="Grid"
                color="#ade4c5"
                height={120}
                width={120}
            />
            </div>
        )
    }
}
export default Load