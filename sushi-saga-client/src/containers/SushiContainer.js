import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

    let domFourSushi=props.fourSushi.map(sushi=>{
      return <Sushi cash={props.cash} key={sushi.id} eachSushi={sushi} handleEaten={props.handleEaten}/>
    })




  return (
    <Fragment>
      <div className="belt">
        {
          /* 
            Render Sushi components here!
          */
        }
        {domFourSushi}

       
        <MoreButton displayIndex={props.displayIndex} />
      </div>
    </Fragment>
  )
}

export default SushiContainer