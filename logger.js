exports.info = (msg) => {
  console.log(new Date() + ': ' + msg);
};

exports.error = (msg) => {
  console.error(msg);
};
