import * as React from 'react';
import { StyledAvatar } from './styledAvatar';

interface AvatarProps {
  children?: React.ReactNode;
  className?: string;
  src?: string;
  margin?: boolean;
}

export function Avatar(props: AvatarProps): JSX.Element {
  const { src, className, margin = false } = props;

  return <StyledAvatar className={className} margin={margin} src={src ? src : '/assets/image/avatar.png'} />;
}
