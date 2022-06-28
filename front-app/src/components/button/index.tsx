import React, {
  MouseEvent,
} from 'react';
import { StyledButton } from './style';

export interface IButtonProps {
  label: string;
  className?: string;
  disabled?: boolean;
  handleClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  type: 'submit' | 'reset';
}

const Button: React.FC<IButtonProps> = ({ label, className, disabled, handleClick, type }) => (

  <StyledButton
    className={className}
    onClick={() => { }}
    disabled={disabled}
    type={type}>
    {label}
  </StyledButton>
);

export default Button;
