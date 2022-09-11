import { createContext } from 'react';
import { useLocalStorage } from '@rehooks/local-storage';

export const valueToken = createContext<any>({});

const ValueTokenProvider = (props: any) => {
  const userToken = useLocalStorage('userToken');

  return (
    <valueToken.Provider value={userToken}>
      {props.children}
    </valueToken.Provider>
  );
};

export default ValueTokenProvider;