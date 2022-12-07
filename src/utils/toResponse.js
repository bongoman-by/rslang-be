const { FILE_STORAGE_PATH } = require('../common/config');
/* eslint-disable prettier/prettier */
const addMethods = schema => {
  // eslint-disable-next-line func-names
  schema.method('toResponse', function () {
    const { _id, ...rest } = this.toJSON();
    delete rest.password;
    delete rest.__v;
    delete rest.userId;
    return { id: _id, ...rest, image: `${FILE_STORAGE_PATH}${rest.image}` };
  });
};

module.exports = { addMethods };
