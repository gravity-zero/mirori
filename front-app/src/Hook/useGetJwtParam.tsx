import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// @ts-ignore
function useGetJwtParam() {

  const [term, setTerm] = useState<string | null>();
  const jwtParam = useParams()

  useEffect(() => {
    console.log(jwtParam.jwt);

    if (jwtParam.jwt) {
      console.log('on passe ici');

      setTerm(jwtParam.jwt)
    } else {
      setTerm('')
    }

  })
  return term
}

export default useGetJwtParam;