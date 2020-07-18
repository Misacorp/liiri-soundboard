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

const Soundboard = styled(SoundboardStructure)``;

SoundboardStructure.propTypes = {
  className: PropTypes.string,
};

export default Soundboard;
