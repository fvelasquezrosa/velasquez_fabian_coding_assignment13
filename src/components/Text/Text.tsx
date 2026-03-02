import React from 'react';
import styled from 'styled-components';
import type { TextProps, TextVariant } from './Text.types';

const fontSizeFor = (variant: TextVariant) => {
  switch (variant) {
    case 'heading':
      return '1.25rem';
    case 'caption':
      return '0.85rem';
    case 'body':
    default:
      return '1rem';
  }
};

const fontWeightFor = (variant: TextVariant) => {
  switch (variant) {
    case 'heading':
      return 700;
    default:
      return 400;
  }
};

const StyledText = styled.p<{
  $variant: TextVariant;
  $disabled?: boolean;
  $color?: string;
  $bg?: string;
}>`
  margin: 0;
  padding: 0.25rem 0.4rem;
  border-radius: 10px;
  display: inline-block;
  max-width: 100%;

  color: ${({ $color }) => $color ?? '#111827'};
  background: ${({ $bg }) => $bg ?? 'transparent'};

  font-size: ${({ $variant }) => fontSizeFor($variant)};
  font-weight: ${({ $variant }) => fontWeightFor($variant)};
  line-height: 1.35;

  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'text')};
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};

  /* Responsive: scale up a bit on larger screens */
  @media (min-width: 640px) {
    font-size: ${({ $variant }) => {
      const base = fontSizeFor($variant);
      if (base === '1.25rem') return '1.5rem';
      if (base === '1rem') return '1.05rem';
      return '0.9rem';
    }};
  }
`;

export const Text: React.FC<TextProps> = ({
  text,
  variant = 'body',
  disabled = false,
  color,
  backgroundColor,
}) => {
  return (
    <StyledText
      $variant={variant}
      $disabled={disabled}
      $color={color}
      $bg={backgroundColor}
      aria-disabled={disabled}
    >
      {text}
    </StyledText>
  );
};

export default Text;