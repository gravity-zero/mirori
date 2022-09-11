import React, { useEffect, useState } from 'react';
import useGetVisitor from '../../../Hook/useGetVisitor';

const Home: React.FC = () => {
  const getVisitor = useGetVisitor();
  const [visitor, setVisitor] = useState<any>();

  useEffect(() => {
    getVisitor.then(response => {
      console.log(response);
      if (!response) {
        return null
      }
      setVisitor(response)
    })
  }, [])

  return (
    <div> {visitor ?
      <h1>Bienvenu {visitor.firstname} !</h1>
      :
      <h1>Bienvenu</h1>}
    </div>
  )
}

export default Home;

