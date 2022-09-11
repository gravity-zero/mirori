import React, { createContext, ReactElement, ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useGetVisitor from '../Hook/useGetVisitor';
import useLocalStorage from 'react-localstorage-hook'

interface IContextProps {
  userToken: any;
  setUserToken: any
}

export const valueToken = createContext<any>({});

const ValueTokenProvider = (props: any) => {
  // const [values, setValue] = useLocalStorage('', []);
  // const value = '';

  const [userToken, setUserToken] = useLocalStorage('', [])
  // const getVisitor = useGetVisitor();
  // const [visitor, setVisitor] = useState<any>();
  const navigate = useNavigate()


  useEffect(() => {
    if (userToken) {
      navigate('/')
    } else {
      console.log('404');
    }
  }, [userToken]);

  return (
    <valueToken.Provider value={{ userToken, setUserToken }}>
      {props.children}
    </valueToken.Provider>
  )
}

export default ValueTokenProvider;