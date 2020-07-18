import { SOUND_PATH } from '../constants/config';

/**
 * Describes a sound file.
 */
class Sound {
  constructor(props) {
    this.name = props.name;
    this.filename = props.filename;
    this.path = `${SOUND_PATH}/${props.filename}`;
  }
}

export default Sound;
