import { device, theme } from '../../styles/theme';
import styled from 'styled-components';

export const Nav = styled.div`
    display: inherit;
`;

export const LinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 8px;
`;

export const Image = styled.img`
    height: 22px;

    @media${device.md} {
        height: 32px;
    }

    @media${device.lg} {
        height: auto;
    }
`;

export const Text = styled.p`
    margin-top: 8px;
    font-size: 14px;
    color: ${theme.colors.black};

    @media ${device.md} {
        font-size: 18px;
    }

    @media ${device.lg} {
        font-size: 24px;
    }
`;

export const NavContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    margin: 2px 62px;
    
    .activeLink {
       

        @media ${device.md} {
            background-color: ${theme.colors.white};
        }
    }
`

