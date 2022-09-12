import React from 'react';
// import ValueTokenProvider from '../../Context/useIsLogin';
import { MessageWrapper, MessagStyledTexteWrapper } from '../styled/styledFacialRecognitionFailed';

const FacialRecognitionFailed: React.FC = () => {
  return (

    <MessageWrapper>
      <MessagStyledTexteWrapper>Oops il semblerait que nous n'ayons pas réussi à vous reconnaitre.
        Vous pouvez retrouver toutes les infos en scannant le QR Code de votre badge avec votre téléphone
      </MessagStyledTexteWrapper>
    </MessageWrapper>

  )
}

export default FacialRecognitionFailed;