import fs from 'fs';

module.exports = function (path) {
  const files = fs.readdirSync(path);
  const directory = path.split('/').slice(2, 3);
  var list = [];

  for (var i in files) {
    var filename = files[i].split('.').slice(0, -1).join('.');
    if (filename.toLowerCase() !== 'readme') {
      list.push({
        text: filename.charAt(0).toUpperCase() + filename.slice(1),
        link: `/${directory}/${filename}`,
      });
    }
  }

  return list;
};
