import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({ label, icon, width = 250, size, ...delegated }) => {
  const SIZES = {
    small: {
      fontSize: 14,
      iconSize: 16,
      borderThickness: 1,
      height: 24,
    },
    large: {
      fontSize: 18,
      iconSize: 24,
      borderThickness: 2,
      height: 36,
    },
  };
  const styles = SIZES[size];
  if (!styles) {
    throw new Error(`Unknown size passed to IconInput: ${size}`);
  }
  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ '--size': styles.iconSize + 'px' }}>
        <Icon id={icon} size={styles.iconSize} strokeWidth={1}></Icon>
      </IconWrapper>
      <TextInput
        {...delegated}
        style={{
          '--width': width + 'px',
          '--height': styles.height / 16 + 'rem',
          '--border-thickness': styles.borderThickness + 'px',
          '--font-size': styles.fontSize / 16 + 'rem',
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;
const TextInput = styled.input`
  height: var(--height);
  width: var(--width);
  font-size: var(--font-size);
  font-weight: 700;
  border: none;
  border-bottom: var(--border-thickness) solid ${COLORS.black};
  padding-left: var(--height);
  color: inherit;
  outline-offset: 2px;
  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  height: var(--size);
  color: inherit;
`;
export default IconInput;
