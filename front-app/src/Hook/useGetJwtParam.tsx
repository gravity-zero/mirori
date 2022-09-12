import { useParams } from 'react-router-dom';

function useGetJwtParam() {
  const jwtParam = useParams()
  console.log('jwtParam=', jwtParam);

  return jwtParam.jwt
}

export default useGetJwtParam;