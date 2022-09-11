import React, { useContext, useEffect, useState } from 'react';
import { valueToken } from '../../Context/useIsLogin';
import useGetJwtParam from '../../Hook/useGetJwtParam';


const AuthFacialRecognition: React.FC = () => {
  const jwtParam = useGetJwtParam();
  console.log(jwtParam);
  const { userToken, setUserToken } = useContext(valueToken)
  const [jwt, setJwt] = useState<any>()

  useEffect(() => {
    setJwt(jwtParam)
  }, [jwtParam])

  useEffect(() => {
    console.log(jwt);

    if (jwt) {
      console.log('update user token', jwt);

      setUserToken(jwt)
    }
  })

  return (
    <valueToken.Provider value={jwt}>
      {userToken}
    </valueToken.Provider>
  )
}

export default AuthFacialRecognition;

