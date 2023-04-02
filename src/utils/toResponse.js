const prepareWord = require('./prepareWord');

/* eslint-disable prettier/prettier */
const addMethods = schema => {
  // eslint-disable-next-line func-names
  schema.method('toResponse', function () {
    const { _id, ...rest } = this.toJSON();
    delete rest.password;
    delete rest.__v;
    delete rest.userId;
    return {
      id: _id,
      ...rest
    };
  });
};

const addMethodsWord = schema => {
  // eslint-disable-next-line func-names
  schema.method('toResponse', function () {
    const { _id, ...rest } = this.toJSON();
    delete rest.__v;
    return prepareWord(_id, rest);
  });
};

module.exports = { addMethods, addMethodsWord };
