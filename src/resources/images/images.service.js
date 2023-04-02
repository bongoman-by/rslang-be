const fetch = require('node-fetch');

const uploadToImgur = async file => {
  try {
    const response = await fetch('https://api.imgur.com/3/image', {
      method: 'post',
      body: {
        image: file.buffer.toString('base64'),
        album: process.env.IMGUR_USERS_ALBUM_ID,
        type: 'base64'
      },
      headers: {
        Authorization: `Bearer ${process.env.IMGUR_ACCESS_TOKEN}`
      }
    });
    console.dir(response);
    const { body } = response;
    return {
      link: body.link,
      deleteHash: body.deletehash
    };
  } catch ({
    response: {
      data: { status, body }
    }
  }) {
    return Promise.reject({ status, message: body.error });
  }
};

module.exports = { uploadToImgur };
