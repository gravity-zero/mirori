import React, { createContext, useState } from 'react';

export const valueToken = createContext('');

const ValueTokenProvider = (props: any) => {

  const [userToken, setUserToken] = useState<any>('');

  return <valueToken.Provider value={userToken}>{props.children}</valueToken.Provider>;

}
export default ValueTokenProvider;