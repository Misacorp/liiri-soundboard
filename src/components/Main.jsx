import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Soundboard from './Soundboard/Soundboard';

const MainStructure = ({ className }) => {
  return (
    <div className={className}>
      <Soundboard />
    </div>
  );
};

const Main = styled(MainStructure)`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.palette.obsidian.dark};
  color: ${({ theme }) => theme.palette.typography.light};
`;

MainStructure.propTypes = {
  className: PropTypes.string,
};

export default Main;
