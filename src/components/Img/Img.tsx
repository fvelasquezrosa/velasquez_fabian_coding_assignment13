import React from 'react';
import styled from 'styled-components';
import type { ImgProps } from './Img.types';

const StyledImg = styled.img<{
  $disabled?: boolean;
  $w?: string;
  $h?: string;
  $radius?: string;
}>`
  width: ${({ $w }) => $w ?? '100%'};
  height: ${({ $h }) => $h ?? 'auto'};
  max-width: 100%;
  display: block;
  object-fit: cover;
  border-radius: ${({ $radius }) => $radius ?? '12px'};

  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'default')};
`;

export const Img: React.FC<ImgProps> = ({
  src,
  alt,
  width,
  height,
  disabled = false,
  borderRadius,
}) => {
  return (
    <StyledImg
      src={src}
      alt={alt}
      $w={width}
      $h={height}
      $disabled={disabled}
      $radius={borderRadius}
      aria-disabled={disabled}
    />
  );
};

export default Img;
