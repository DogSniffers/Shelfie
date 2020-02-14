import React,{ Component } from "react";
import Axios from 'axios';

export default class Form extends Component{
    constructor(){
        super()
        this.state = {
            name:'',
            price:0,
            imgurl:'',

        }
    }
    cancel(){
        this.setState({name:'', price:0, imgurl:''})
    }
    render(){
        console.log(this.state)
        return(
            <div>
                <div>Form</div>
                <input></input>
                <input></input>
                <input></input>
                <button onClick={() => this.cancel()}>Cancel</button>
                <button>Add to Inventory</button>
            </div>
        )
    }
}