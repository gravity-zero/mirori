import React, { useEffect, useState } from 'react';
import useGetVisitor from '../../Hook/useGetVisitor';
import { Container, Title, Subtitle } from './styledWelcomeMsg';

interface IWelcomeMsgProps {
  className?: string,
}

const WelcomeMsg: React.FC<IWelcomeMsgProps> = ({ className }) => {
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
    <Container className={className}>
      <Title>Hello {visitor ? visitor.firstname : undefined} !</Title>
      <Subtitle>Bienvenue à {visitor ? visitor.event.name : undefined}</Subtitle>
    </Container>
  )
}

export default WelcomeMsg;