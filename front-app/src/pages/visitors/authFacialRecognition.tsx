import React, { useContext, useEffect, useState } from 'react';
import useGetJwtParam from '../../Hook/useGetJwtParam';


const AuthFacialRecognition: React.FC = () => {
  const tokenParam = useGetJwtParam();
  const [jwt, setJwt] = useState<any>()

  useEffect(() => setJwt(tokenParam))

  return (
    <div>
      <h1>Route jwt Auth reconnaissance facial</h1>
      <p>Value of term: {jwt}</p>
    </div>
  )
}

export default AuthFacialRecognition;

