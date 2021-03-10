import PropTypes from 'prop-types';
import React, { createContext, useContext, useEffect, useState } from 'react';

export const viewportContext: any = createContext({});

export const ViewportProvider: React.FC = ({ children }) => {
  // This is the exact same logic that we previously had in our hook

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [applesCount] = useState(3);
  const [bananaCount] = useState();

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    console.log('handledWindowResize');
  };

  useEffect(() => {
    console.log('used effect', window.innerWidth);
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  /* Now we are dealing with a context instead of a Hook, so instead
     of returning the width and height we store the values in the
     value of the Provider */
  return (
    <>
      <viewportContext.Provider
        value={{
          width,
          height,
          applesCount,
          orangesCount: applesCount,
          bananaCount,
        }}
      >
        {children}
      </viewportContext.Provider>
    </>
  );
};

ViewportProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useViewport1 = (): {
  width: number;
  height: number;
  applesCount: number;
} => {
  /* We can use the "useContext" Hook to access a context from within
       another Hook, remember, Hooks are composable! */
  // console.log(viewportContext)
  const { width, height, applesCount, bananaCount } = useContext(
    viewportContext
  );
  console.log('There', { width, height, applesCount, bananaCount });
  return { width, height, applesCount };
};
