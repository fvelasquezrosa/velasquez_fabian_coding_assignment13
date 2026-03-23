import React from 'react';
import styled from 'styled-components';
import type { RadioButtonProps } from './RadioButton.types';

const Wrapper = styled.label<{ $disabled?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;

  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};

  user-select: none;
`;

const StyledRadio = styled.input<{ $accent?: string }>`
  width: 18px;
  height: 18px;
  accent-color: ${({ $accent }) => $accent ?? '#2563eb'};
`;

export const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  name,
  checked = false,
  disabled = false,
  accentColor,
}) => {
  return (
    <Wrapper $disabled={disabled} aria-disabled={disabled}>
      <StyledRadio
        type="radio"
        name={name}
        checked={checked}
        disabled={disabled}
        $accent={accentColor}
        readOnly
      />
      <span>{label}</span>
    </Wrapper>
  );
};

export default RadioButton;
