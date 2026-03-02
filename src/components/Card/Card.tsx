import React from 'react';
import styled from 'styled-components';
import type { CardProps } from './Card.types';

const Wrapper = styled.div<{
  $disabled?: boolean;
  $bg?: string;
  $border?: string;
}>`
  width: 100%;
  max-width: 420px;
  padding: 1rem;
  border-radius: 16px;
  border: 1px solid ${({ $border }) => $border ?? '#e5e7eb'};
  background: ${({ $bg }) => $bg ?? '#ffffff'};

  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);

  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'default')};

  @media (min-width: 640px) {
    padding: 1.25rem;
  }
`;

const Title = styled.h3`
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;

  @media (min-width: 640px) {
    font-size: 1.35rem;
  }
`;

const Body = styled.p`
  margin: 0;
  line-height: 1.45;
  color: #111827;
`;

export const Card: React.FC<CardProps> = ({
  title,
  body,
  disabled = false,
  backgroundColor,
  borderColor,
}) => {
  return (
    <Wrapper
      $disabled={disabled}
      $bg={backgroundColor}
      $border={borderColor}
      aria-disabled={disabled}
    >
      {title ? <Title>{title}</Title> : null}
      <Body>{body}</Body>
    </Wrapper>
  );
};

export default Card;