import React from 'react';
import { StyledNavBar, StyledText, ButtonMenu } from './style';



const NavigationBar = () => (
    <StyledNavBar>
        <ButtonMenu>
            <StyledText>ACCEUIL</StyledText>
        </ButtonMenu>
        <ButtonMenu>
            <StyledText>RECHERCHE</StyledText>
        </ButtonMenu>
        <ButtonMenu>
            <StyledText>AGENDA</StyledText>
        </ButtonMenu>
        <ButtonMenu>
            <StyledText>RECOMMANDATION</StyledText>
        </ButtonMenu>
</StyledNavBar>
);

export default NavigationBar;