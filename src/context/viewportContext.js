import React, {useState, useEffect, createContext, useContext} from 'react'

export const viewportContext = createContext({});

export const ViewportProvider = ({ children }) => {
  // This is the exact same logic that we previously had in our hook

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [applesCount, setApplesCount] = useState(3);
  const [bananaCount, setBananaCount] = useState();

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  /* Now we are dealing with a context instead of a Hook, so instead
     of returning the width and height we store the values in the
     value of the Provider */
  return (
      <>
      
    <viewportContext.Provider value={{ width, height, applesCount, orangesCount: applesCount, bananaCount}}>
      {children}
    </viewportContext.Provider>
    </>
  );
};

export const useViewport1 = () => {
    /* We can use the "useContext" Hook to acccess a context from within
       another Hook, remember, Hooks are composable! */
    // console.log(viewportContext)
    const { width, height, applesCount, bananaCount } = useContext(viewportContext);
    console.log("There", { width, height, applesCount, bananaCount } );
    return { width, height, applesCount };
  }
