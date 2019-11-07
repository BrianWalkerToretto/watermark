const fs = require('fs');

export default dir => {
  if (!dir || typeof dir !== 'string') {
    return {};
  }
  const path = dir + (dir.endsWith('/') ? '' : '/');
  let allEntry = {};
  const files = fs.readdirSync(path);
  files.forEach(item => {
    let stat = fs.lstatSync(path + item);
    if (stat.isDirectory() === true) {
      allEntry[item + '/index'] = `${path}${item}`;
    }
  });
  return allEntry;
};
