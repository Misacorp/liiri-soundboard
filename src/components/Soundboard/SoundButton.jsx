import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

import Button from '../generic/button/Button';

import Sound from '../../types/Sound';
import { PLAYING, STOPPED } from '../../constants/playStates';
import { DEFAULT_VOLUME } from '../../constants/config';

/**
 * Button that plays a sound.
 */
const SoundButtonStructure = ({ sound, className }) => {
  const [playState, setPlayState] = useState(STOPPED);

  const [audio] = useState(new Audio(sound.path));

  const stop = useCallback(() => {
    setPlayState(STOPPED);
    audio.pause();
    audio.currentTime = 0.0;
  }, [audio]);

  const play = () => {
    audio.currentTime = 0.0;
    audio.volume = DEFAULT_VOLUME;
    setPlayState(PLAYING);
    audio.play();
  };

  useEffect(() => {
    audio.addEventListener('ended', stop);

    return () => audio.removeEventListener('ended', stop);
  }, [audio, stop]);

  return (
    <div>
      <Button className={className} onPress={play}>
        {sound.name}
        {' - '}
        {playState}
      </Button>
    </div>
  );
};

const SoundButton = styled(SoundButtonStructure)``;

SoundButtonStructure.propTypes = {
  sound: PropTypes.instanceOf(Sound).isRequired,
  className: PropTypes.string,
};

export default SoundButton;
