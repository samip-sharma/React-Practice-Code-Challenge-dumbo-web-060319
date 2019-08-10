// import React, { Fragment } from 'react'
import React from 'react'

class Sushi extends React.Component{
  
  state={
    eaten:false
  }
  onClick=(e)=>{
    if(this.props.cash>=this.props.eachSushi.price){
    this.setState({
      eaten:true
    })
    this.props.handleEaten(this.props.eachSushi.name,this.props.eachSushi.price)
  }
  }


  render(){
  return (
    <div key={this.props.eachSushi.id} className="sushi">
      <div  className="plate" 
           onClick={this.onClick}>
        { 
          this.state.eaten ?
            null
          :
            <img src={this.props.eachSushi.img_url} alt={this.props.eachSushi.name} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {this.props.eachSushi.name} - ${this.props.eachSushi.price}
      </h4>
    </div>
  )}
}

export default Sushi

// 