import React from 'react';

export default (props) => {

  const style = {
    left: `${props.cord[0]}%`,
    top: `${props.cord[1]}%`
  }

  return (
    <div className="snakeFood" style={style}></div>
  )
}
