import React, { createContext, useEffect, useState } from 'react';


export const valueContext = createContext(false);

const ValueContextProvider = (props: any) => {

  const [isMobile, setIsMobile] = useState<boolean>();
  const [width, setWidth] = useState<number>()

  useEffect(() => {
    setWidth(window.screen.width);
    if (width && width < 2800) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }, [width, isMobile])

  return <valueContext.Provider value={isMobile ? isMobile : false}>{props.children}</valueContext.Provider>;
}

export default ValueContextProvider;