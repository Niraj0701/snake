import React from 'react';

const Snake = (props) => {
  return (
    <div>
      {props.snakecords.map((dot, i) => {
        const style = {
          left: `${dot[0]}%`,
          top: `${dot[1]}%`
        };
        return <div className="dot" key={i} style={style} />;
      })}
    </div>
  );
};

export default Snake;