import { createContext, useState, useEffect } from 'react';
import { useLocalStorage } from '@rehooks/local-storage';

export const valueToken = createContext<any>({});

const ValueTokenProvider = (props: any) => {
  const userToken = useLocalStorage('userToken');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    console.log(userToken);

    if (userToken[0] !== null) {
      setIsAuthenticated(true)
      console.log(isAuthenticated);
    } else {
      setIsAuthenticated(false)
    }
  }, [userToken])

  return (
    <valueToken.Provider value={{ userToken, isAuthenticated }}>
      {props.children}
    </valueToken.Provider>
  );
};

export default ValueTokenProvider;