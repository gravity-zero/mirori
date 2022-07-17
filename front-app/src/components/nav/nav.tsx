import React from 'react';
import { NavLink } from 'react-router-dom';
import { LinkContainer, Image, NavContainer, Text } from './styledNav';

interface INavElement {
  label: string;
  icon?: string;
  navigateTo: string;
}

const NavElement: React.FC<INavElement> = ({
  label,
  icon,
  navigateTo,
}) => {
  return (
    <NavLink className={({ isActive }) => isActive ? "activeLink" : ''} to={navigateTo} >
      <LinkContainer>
        <Image src={icon} alt="" />
        <Text>{label}</Text>
      </LinkContainer>
    </NavLink>
  )
};

export const Nav: React.FC = () => {

  return (
    <NavContainer>
      <NavElement
        label="Plan"
        icon="/assets/icons/plan.svg"
        navigateTo="/"
      ></NavElement>
      <NavElement
        label="Recherche"
        icon="/assets/icons/search.svg"
        navigateTo="/visitors/exhibitors"
      ></NavElement>
      <NavElement
        label="Agenda"
        icon="/assets/icons/schedule.svg"
        navigateTo="/visitors/schedule"
      ></NavElement>
      <NavElement
        label="Evenement"
        icon="/assets/icons/events.svg"
        navigateTo="/visitors/events"
      ></NavElement>
    </NavContainer>

  );
}

export default Nav;