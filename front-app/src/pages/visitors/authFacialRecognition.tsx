import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { valueToken } from '../../Context/useIsLogin';
import useGetJwtParam from '../../Hook/useGetJwtParam';

const AuthFacialRecognition: React.FC = () => {
  const jwtParam = useGetJwtParam();
  const navigate = useNavigate()

  useEffect(() => {
    if (jwtParam) {
      localStorage.setItem('userToken', jwtParam)
      navigate('/')
    }
  }, [jwtParam])

  return (
    <valueToken.Provider value={jwtParam} />
  )
}

export default AuthFacialRecognition;

