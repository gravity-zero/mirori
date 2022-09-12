const API_URL = 'https://mirori.gravity-zero.fr/';

function useGetVisitor() {
  const context = localStorage.getItem('userToken')


  return fetch(`${API_URL}visitor/auth/${context}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
    .then(data => data.json())
}


export default useGetVisitor
