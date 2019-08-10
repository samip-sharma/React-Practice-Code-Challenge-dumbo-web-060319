import React from 'react'

const MoreButton = (props) => {

    return <button onClick={()=>props.displayIndex()}>
            More sushi!
          </button>
}

export default MoreButton