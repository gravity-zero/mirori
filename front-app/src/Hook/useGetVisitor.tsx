import { useContext } from 'react';
import { valueToken } from '../Context/useIsLogin';

const API_URL = 'https://mirori.gravity-zero.fr/';

function useGetVisitor() {
  const jwt = useContext(valueToken);

  return fetch(`${API_URL}visitor/auth/${jwt}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
    .then(data => data.json())
}
export default useGetVisitor
