import React from 'react';
import { StyledNavBar, StyledText, ButtonMenu, Wrap } from './style';
import home from '../../assets/home-icon.png';
import magnifier from '../../assets/magnifier.png';
import agenda from '../../assets/agenda.png';
import heart from '../../assets/heart.png';



const NavigationBar = () => (
    <StyledNavBar>
        <ButtonMenu>
            <Wrap>
                <img width='70px' src={home} alt="home" />
                <StyledText>ACCEUIL</StyledText>
            </Wrap>
        </ButtonMenu>
        <ButtonMenu>
            <Wrap>
                <img width='70px' src={magnifier} alt="magnifier" />
                <StyledText>RECHERCHE</StyledText>
            </Wrap>
        </ButtonMenu>
        <ButtonMenu>
            <Wrap>
                <img width='70px' src={agenda} alt="agenda" />
                <StyledText>AGENDA</StyledText>
            </Wrap>
        </ButtonMenu>
        <ButtonMenu>
            <Wrap>
                <img width='70px' src={heart} alt="heart" />
                <StyledText>RECOMMANDATION</StyledText>
            </Wrap>
        </ButtonMenu>
</StyledNavBar>
);

export default NavigationBar;