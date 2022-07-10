import React, {
  MouseEvent,
} from 'react';
import { ButtonStyled } from './styledButton';

export interface IButtonProps {
  label: string;
  className?: string;
  disabled?: boolean;
  handleClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  type: 'submit' | 'reset';
}

const Button: React.FC<IButtonProps> = ({ label, className, disabled, handleClick, type }) => (

  <ButtonStyled
    className={className}
    onClick={handleClick}
    disabled={disabled}
    type={type}>
    {label}
  </ButtonStyled>
);

export default Button;
