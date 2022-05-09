import React, { useRef } from 'react';

const Image = () => {
  const testStyles = useRef({
      position: "absolute",
      top: Math.floor(Math.random() * 50),
      left: "50%",
      transform: "translate(-50%, -50%)",
  });

  return <img src ="./target.png" style={testStyles.current} alt="" />;
};
     
 export default Image;


