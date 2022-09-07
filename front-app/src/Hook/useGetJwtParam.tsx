import React, { useEffect, useState } from 'react';
// @ts-ignore
function useGetJwtParam(): void {

  const queryParams = new URLSearchParams(window.location.search)
  const [term, setTerm] = useState<any>()

  useEffect(() => {
    // https://reactgo.com/get-last-segment-url-javascript/  (il n'y as pas de jwt= dans l'url, il y a de forte chance que la method get ne retourne rien)
    setTerm(queryParams.get("jwt"))
  })
  return term

}
export default useGetJwtParam;