import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

import Button, { accents } from '../generic/button/Button';

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

  const accent = playState === PLAYING ? accents.GREEN : accents.ORANGE;

  return (
    <Button className={className} onPress={play} accent={accent}>
      {sound.name}
    </Button>
  );
};

const SoundButton = styled(SoundButtonStructure)`
  width: 100%;
  height: 100%;
`;

SoundButtonStructure.propTypes = {
  sound: PropTypes.instanceOf(Sound).isRequired,
  className: PropTypes.string,
};

export default SoundButton;
