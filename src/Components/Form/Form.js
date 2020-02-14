import React,{ Component } from "react";
// import Axios from 'axios';
// import Express from "express";

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
    handleChangeURL = value =>{
        this.setState({imgurl: value})
    }
    handleChangeName = function(value) {
        const newName = value
        this.setState({name: newName})
    }
    handleChangePrice = value => {
        this.setState({price: value})
    }




    render(){
        // console.log(this.state)
        // console.log(this.handleChangeName.newName)
        return(
            <div>
                <div>Form</div>
                <h2>Image URL:</h2>
                <input onChange={(e) => this.handleChangeURL(e.target.value)}></input>
                <h2>Name:</h2>
                <input type='Text' onChange={(e) => this.handleChangeName(e.target.value)}></input>
                <h2>Price:</h2>
                <input onChange={(e) => this.handleChangePrice(+e.target.value)}></input>
                <button onClick={() => this.cancel()}>Cancel</button>
                <button>Add to Inventory</button>
            </div>
        )
    }
}