import React from 'react';
import { StyledNavBarMobile, StyledText, ButtonMenu, Wrap } from './style';
import home from '../../assets/home-icon.png';
import magnifier from '../../assets/magnifier.png';
import agenda from '../../assets/agenda.png';
import heart from '../../assets/heart.png';

interface NavigationBarProps {
    onClickHome?: () => void;
    onClickSearch?: () => void;
    onClickAgenda?: () => void;
    onClickRecommendation?: () => void;
  }

const NavigationBarMiror: React.FC<NavigationBarProps> = ({ 
    onClickHome,
    onClickSearch,
    onClickAgenda,
    onClickRecommendation
}) => { 
    return (
    <StyledNavBarMobile>
        <ButtonMenu onClick={onClickHome}>
            <Wrap>
                <img width='70px' src={home} alt="home" />
                <StyledText>ACCEUIL</StyledText>
            </Wrap>
        </ButtonMenu>
        <ButtonMenu onClick={onClickSearch}>
            <Wrap>
                <img width='70px' src={magnifier} alt="magnifier" />
                <StyledText>RECHERCHE</StyledText>
            </Wrap>
        </ButtonMenu>
        <ButtonMenu onClick={onClickAgenda}>
            <Wrap>
                <img width='70px' src={agenda} alt="agenda" />
                <StyledText>AGENDA</StyledText>
            </Wrap>
        </ButtonMenu>
        <ButtonMenu onClick={onClickRecommendation}>
            <Wrap>
                <img width='70px' src={heart} alt="heart" />
                <StyledText>RECOMMANDATION</StyledText>
            </Wrap>
        </ButtonMenu>
    </StyledNavBarMobile>
    );
}

export default NavigationBarMiror;