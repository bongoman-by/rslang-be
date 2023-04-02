const {
  FILE_STORAGE_PATH_AUDIO,
  FILE_STORAGE_PATH_IMAGE,
  FILE_STORAGE_PATH
} = require('../common/config');

module.exports = (id, rest) => {
  if (FILE_STORAGE_PATH) {
    return {
      id,
      ...rest,
      image: rest.image.includes('http')
        ? rest.image
        : `${FILE_STORAGE_PATH}${rest.image}`,
      audio: rest.audio.includes('http')
        ? rest.audio
        : `${FILE_STORAGE_PATH}${rest.audio}`,
      audioMeaning: rest.audioMeaning.includes('http')
        ? rest.audioMeaning
        : `${FILE_STORAGE_PATH}${rest.audioMeaning}`,
      audioExample: rest.audioExample.includes('http')
        ? rest.audioExample
        : `${FILE_STORAGE_PATH}${rest.audioExample}`
    };
  }
  return {
    id,
    ...rest,
    image: rest.image.includes('http')
      ? rest.image
      : `${FILE_STORAGE_PATH_IMAGE}${rest.image}`,
    audio: rest.audio.includes('http')
      ? rest.audio
      : `${FILE_STORAGE_PATH_AUDIO}${rest.audio}`,
    audioMeaning: rest.audioMeaning.includes('http')
      ? rest.audioMeaning
      : `${FILE_STORAGE_PATH_AUDIO}${rest.audioMeaning}`,
    audioExample: rest.audioExample.includes('http')
      ? rest.audioExample
      : `${FILE_STORAGE_PATH_AUDIO}${rest.audioExample}`
  };
};
