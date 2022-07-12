import { device, theme } from '../../Styles/theme';
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
    height: 34px;

    @media${device.md} {
        height: 32px;
    }

    @media${device.lg} {
        height: auto;
    }
`;

export const Text = styled.p`
    margin-top: 8px;
    font-size: 16px;
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
    margin: 20px;
    
    .activeLink {
        background-color: ${theme.colors.orange};
        height: 84px;
        width: 84px;
        border-radius: 100%;
        margin-bottom: 12px;

        @media ${device.md} {
            background-color: ${theme.colors.white};
        }
    }
`

