/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef } from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import { useButton } from '@react-aria/button';

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

const Button = styled(ButtonStructure)``;

ButtonStructure.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Button;
