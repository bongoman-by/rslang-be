const uploadRepo = require('./upload.db.repository');
const cloudinary = require('cloudinary').v2;
const path = require('path');
const fetch = require('node-fetch');

const { BAD_REQUEST_ERROR } = require('../../errors/appErrors');

const upload = (fullFileName, type) => {
  const fileName = fullFileName
    .split('.')
    .slice(0, -1)
    .join('.');
  const filePath = path.join(process.cwd(), fullFileName);
  return cloudinary.uploader
    .upload(filePath, {
      public_id: `rslang/${fileName}`,
      resource_type: type
    })
    .then(result => {
      return {
        message: 'Success',
        public_id: result.public_id
      };
    })
    .catch(error => {
      return {
        message: error.message,
        public_id: fileName
      };
    });
};

const post = async () => {
  const baseURL =
    'https://res.cloudinary.com/s-klyuchnikov/image/upload/v1670136773/rslang/';
  const idList = [];
  const props = [
    { prop: 'image', type: 'image' },
    { prop: 'audio', type: 'video' },
    { prop: 'audioMeaning', type: 'video' },
    { prop: 'audioExample', type: 'video' }
  ];
  for (let group = 0; group < 6; group++) {
    for (let page = 0; page < 30; page++) {
      console.log({ group, page });
      const words = await uploadRepo.post({ group, page });
      words.forEach(word => {
        props.forEach(item => {
          const url = `${baseURL}${word[item.prop]}`;
          fetch(url)
            .then()
            .catch(() => {
              try {
                const result = upload(word[item.prop], item.type);
                if (result.message === 'Success') {
                  idList.push(result.public_id);
                } else {
                  idList.push(result.message);
                }
              } catch (error) {
                throw new BAD_REQUEST_ERROR(error.message);
              }
            });
        });
      });
    }
  }
};

//! Request not working properly

const get = async () => {
  const baseURL =
    'https://res.cloudinary.com/s-klyuchnikov/image/upload/v1670136773/rslang/';
  const props = [
    { prop: 'image', type: 'image' },
    { prop: 'audio', type: 'video' },
    { prop: 'audioMeaning', type: 'video' },
    { prop: 'audioExample', type: 'video' }
  ];
  for (let group = 0; group < 6; group++) {
    for (let page = 0; page < 30; page++) {
      const words = await uploadRepo.post({ group, page });
      words.forEach(word => {
        props.forEach(item => {
          const url = `${baseURL}${word[item.prop]}`;
          fetch(url)
            .then()
            .catch(() => {
              console.log(word[item.prop]);
            });
        });
      });
    }
  }
};

module.exports = { post, get };
