import React, { createContext, useEffect, useState } from 'react';
import useGetJwt from '../Hook/useGetJwt'

export const valueToken = createContext('');


const ValueTokenProvider = (props: any) => {
  const jwt = useGetJwt();
  const [userToken, setUserToken] = useState<string>('');

  console.log('here');
  useEffect(() => {
    jwt.then((response) => {
      setUserToken(response.token)
    })
  })

  return <valueToken.Provider value={userToken}>{props.children}</valueToken.Provider>;

}
export default ValueTokenProvider;