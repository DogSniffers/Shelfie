import React from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import Product from './Components/Product/Product';
import axios from 'axios';

import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      inventory:[1,2,3]
    }
  }
  componentDidMount(){
    this.getInventory()
  }
  getInventory = () =>{
    axios.get('/api/inventory').then(res =>this.setState({inventory:res.data}))
  };
  
  
  
  render(){
    // console.log(this.state)
    // console.log(this.state.inventory)
  return (
    <div>
      <Header/>
      <Dashboard/>
      <Form/>
      <Product/>
    </div>
  );
}
}

export default App;
