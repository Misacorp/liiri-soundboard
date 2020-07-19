/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef } from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import { useButton } from '@react-aria/button';

import resetButtonStyle from './resetButtonStyle';
import noiseTexture from '../../../assets/images/noise_texture.png';

/**
 * Accent colors
 */
export const accents = {
  GREEN: 'green',
  ORANGE: 'orange',
  RED: 'red',
};

/**
 * Base button component.
 */
const ButtonStructure = (props) => {
  const ref = useRef();
  const { buttonProps } = useButton(props, ref);
  const { className, children } = props;

  return (
    <button {...buttonProps} className={className}>
      {children}
    </button>
  );
};

const padding = '5px';
const Button = styled(ButtonStructure)`
  ${resetButtonStyle}

  position: relative;
  padding: 1rem;
  background-color: ${({ theme }) => theme.palette.obsidian.main};
  border-radius: 3px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.16);
  font-size: 1.2rem;
  outline: none;

  ::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    opacity: 0.15;
    background-image: url(${noiseTexture});
    background-repeat: repeat;
  }

  ::after {
    content: '';
    display: block;
    position: absolute;
    left: ${padding};
    right: ${padding};
    top: ${padding};
    bottom: ${padding};
    border-width: 1px;
    border-style: solid;
    border-image-slice: 1;
    border-image-source: linear-gradient(
      to bottom right,
      ${({ accent, theme }) => theme.palette[accent].main},
      ${({ accent, theme }) => theme.palette[accent].main}77
    );
  }

  &:hover,
  &:focus,
  &:active {
    box-shadow: 0 0px 5px rgba(0, 0, 0, 0.16);
    cursor: pointer;
    background-color: ${({ theme }) => theme.palette.obsidian.mainHighlight};

    ::after {
      border-image-source: linear-gradient(
        to bottom right,
        ${({ accent, theme }) => theme.palette[accent].lighter},
        ${({ accent, theme }) => theme.palette[accent].lighter}77
      );
    }
  }
`;

ButtonStructure.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Button;
