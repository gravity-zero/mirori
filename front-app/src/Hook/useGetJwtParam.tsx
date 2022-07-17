import React, { useEffect, useState } from 'react';
// @ts-ignore
function useGetJwtParam(): void {

  const queryParams = new URLSearchParams(window.location.search)
  const [term, setTerm] = useState<any>()

  useEffect(() => {
    setTerm(queryParams.get("jwt"))
  })
  return term

}
export default useGetJwtParam;