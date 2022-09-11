import { useParams } from 'react-router-dom';

function useGetJwtParam() {
  const jwtParam = useParams()
  return jwtParam.jwt
}

export default useGetJwtParam;