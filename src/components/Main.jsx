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

const Main = styled(MainStructure)``;

MainStructure.propTypes = {
  className: PropTypes.string,
};

export default Main;
