import React from 'react';
import styled from 'styled-components';
import type { HeroImageProps } from './HeroImage.types';

const Wrapper = styled.section<{
  $img: string;
  $h?: string;
  $disabled?: boolean;
}>`
  width: 100%;
  height: ${({ $h }) => $h ?? '240px'};
  border-radius: 16px;
  overflow: hidden;

  background-image: url(${({ $img }) => $img});
  background-size: cover;
  background-position: center;

  position: relative;

  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'default')};

  @media (min-width: 640px) {
    height: ${({ $h }) => $h ?? '320px'};
  }
`;

const Overlay = styled.div<{ $overlay?: string }>`
  position: absolute;
  inset: 0;
  background: ${({ $overlay }) => $overlay ?? 'rgba(0, 0, 0, 0.45)'};
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  height: 100%;
  padding: 1.1rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 0.4rem;

  @media (min-width: 640px) {
    padding: 1.5rem;
    gap: 0.6rem;
  }
`;

const Title = styled.h2`
  margin: 0;
  color: white;
  font-size: 1.5rem;
  line-height: 1.15;

  @media (min-width: 640px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  margin: 0;
  color: rgba(255, 255, 255, 0.92);
  font-size: 1rem;
  line-height: 1.35;

  @media (min-width: 640px) {
    font-size: 1.05rem;
  }
`;

export const HeroImage: React.FC<HeroImageProps> = ({
  imageUrl,
  title,
  subtitle,
  height,
  disabled = false,
  overlayColor,
}) => {
  return (
    <Wrapper
      $img={imageUrl}
      $h={height}
      $disabled={disabled}
      aria-disabled={disabled}
    >
      <Overlay $overlay={overlayColor} />
      <Content>
        <Title>{title}</Title>
        {subtitle ? <Subtitle>{subtitle}</Subtitle> : null}
      </Content>
    </Wrapper>
  );
};

export default HeroImage;
