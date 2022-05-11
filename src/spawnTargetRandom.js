import React, {useState, useEffect,useReducer,useCallback } from 'react';

class Test {
  static style;
}

export default function Image(){
  const { height, width } = useWindowDimensions();
  const[clicked, setClicked] = useState(false);

  const heightOffSet = 200;
  Test.style =({
      position: "absolute",
      top: Math.floor(Math.random() * (height-heightOffSet))+heightOffSet,
      left: Math.floor(Math.random()*width),
      transform: "translate(-50%, -50%)",
  });

  const handleClick = () => {
    setClicked(!clicked);
}

  return <img src ="./target.png" style={Test.style} className="Image" onClick={handleClick} alt="" />;
};



function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

 function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {     //Useeffect Bliver kaldt første gang vores komponent bliver vist - svarer til component.
    //Did mount + componentdidupdate derudover "detekter" den hvornår en side bliver renderet eller re-renderet
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}



