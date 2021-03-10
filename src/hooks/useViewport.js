import React, { useContext } from 'react';
import { viewportContext } from '../context/viewportContext';

/* Rewrite the "useViewport" hook to pull the width and height values
   out of the context instead of calculating them itself */
export const useViewport = () => {
  /* We can use the "useContext" Hook to access a context from within
       another Hook, remember, Hooks are composable! */
  const { width, height, applesCount } = useContext(viewportContext);
  return { width, height, applesCount };
};
