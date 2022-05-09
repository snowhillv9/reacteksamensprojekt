import React, { useRef,useState, useEffect } from 'react';

const Image = () => {
  const { height, width } = useWindowDimensions();
  const testStyles = useRef({
      position: "absolute", width: Math.random()*width,
      top: Math.floor(Math.random() * 50),
      left: "50%",
      transform: "translate(-50%, -50%)",
  });

  return <img src ="./target.png" style={testStyles.current} alt="" />;
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


 export default Image;


