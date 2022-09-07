function useGetJwt() {

  return fetch(`${process.env.REACT_APP_API_URL}auth/login`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams(
      { email: "68hoho@waat.fr", api_key: `${process.env.REACT_APP_API_KEY}` }
    )
  })
    .then(data => data.json())
}

export default useGetJwt
