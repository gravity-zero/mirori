import { useState } from 'react'

function useGetJwt() {
  // Cette fonction ne doit servir qu'à générer un QrCode
  return fetch('https://mirori.gravity-zero.fr/auth/login', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams(
      { email: "68hoho@waat.fr", api_key: '019feb4e-2596-4d12-b690-9ffa78b0347b' }
    )
  })
    .then(data => data.json())
}

export default useGetJwt
