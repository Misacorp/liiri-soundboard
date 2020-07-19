import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

import SoundButton from './SoundButton';

import Sound from '../../types/Sound';
import soundConfig from './soundConfig';

const SoundboardStructure = ({ className }) => {
  const sounds = soundConfig.map((entry) => new Sound(entry));

  return (
    <div className={className}>
      {sounds.map((sound) => (
        <SoundButton key={sound.name} sound={sound} />
      ))}
    </div>
  );
};

const Soundboard = styled(SoundboardStructure)`
  display: grid;
  grid-auto-rows: 1fr;
  grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));
  grid-gap: 1rem;
  padding: 1rem;

  ::before {
    content: '';
    width: 0;
    padding-bottom: 100%;
    grid-row: 1 / 1;
    grid-column: 1 / 1;
  }

  & > :first-child {
    grid-row: 1 / 1;
    grid-column: 1 / 1;
  }
`;

SoundboardStructure.propTypes = {
  className: PropTypes.string,
};

export default Soundboard;
