import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state={
    allSushi:[],
    displayIndex:[0,4],
    eaten:[],
    cash:100
  }
  componentDidMount(){
    fetch(API)
    .then(response=> response.json())
    .then((data)=>{this.setState({allSushi:data})})
  }

  handleMoreButton=()=>{
    let newArr=[this.state.displayIndex[0]+4,this.state.displayIndex[1]+4]
    this.setState({
      displayIndex:newArr
    })
  }

  handleEaten=(name,price)=>{
    console.log(price)
    this.setState({
      eaten:[...this.state.eaten,name],
      cash:this.state.cash-price
    })
  }


  render() {
    let start=this.state.displayIndex[0]
    let end=this.state.displayIndex[1]
    let fourSushi= this.state.allSushi.slice(start,end)
    return (
      <div className="app">
        <SushiContainer cash={this.state.cash}  fourSushi={fourSushi} displayIndex={this.handleMoreButton} handleEaten={this.handleEaten}/>
        <Table  eaten={this.state.eaten} cash={this.state.cash}/>
      </div>
    );
  } 
}

export default App;