import React from 'react'

const box = (props) => {
    let result
    if (
        props.title === "Computer" &&
        props.result !== "tie" &&
        props.result !== ""
    ){result = props.result === "win" ? "lose" : "win";} 
    else {result = props.result}

    if (props.title === "Computer") {
        console.log("computer", result);
    }

  return (
    <div className={`box ${result}`}>
      <h1>{props.title}</h1>
      <img className='item-img' src={props.item && props.item.img}/>
      <h2>{props.result}</h2>
    </div>
  )
}

export default box
