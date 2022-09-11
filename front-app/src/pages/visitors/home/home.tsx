import React, { useContext, useEffect, useState } from 'react';
import ValueTokenProvider, { valueToken } from '../../../Context/useIsLogin';
import useGetJwt from '../../../Hook/useGetJwt';
import useGetVisitor from '../../../Hook/useGetVisitor';

const Home: React.FC = () => {
  const getVisitor = useGetVisitor();
  // const jwtUser = useGetJwt()
  // const context = useContext(valueToken)
  const [visitor, setVisitor] = useState<any>();

  useEffect(() => {
    getVisitor.then(response => {
      setVisitor(response)
      console.log(response);
    })
    // jwtUser.then(response => {
    //   setVisitor(response)
    //   console.log(response);
    // })

  }, [])

  return (

    <div> {visitor ?
      <h1>Bienvenu {visitor.email} !</h1>
      :
      <h1>Bienvenu</h1>}
    </div>
  )
}

export default Home;

