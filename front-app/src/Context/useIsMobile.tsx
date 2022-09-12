import React, { createContext, useEffect, useState } from 'react';



export const valueContext = createContext(false);
// @ts-ignore
const ValueContextProvider = (props: any) => {
  // const scrollMouse = useScrollMouse();

  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [width, setWidth] = useState<number>()

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.screen.width)
    })
  })

  useEffect(() => {
    setWidth(window.screen.width);
    if (width && width < 980) {
      setIsMobile(true)
    } else {
      setIsMobile(false);
    }
  }, [width, isMobile])



  return <valueContext.Provider value={isMobile}>{props.children}</valueContext.Provider>;
}

export default ValueContextProvider;