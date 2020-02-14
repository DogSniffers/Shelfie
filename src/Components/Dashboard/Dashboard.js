import React,{ Component } from "react";
import Product from '../Product/Product';

export default class Dashboard extends Component{
    
    
    render(props){
        return(
            
            <div>Dashboard
                <Product/>
            </div>
        )
    }
}