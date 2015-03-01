var path = require('path');

var pattern = function(file) {
    return {pattern: file, included: true, served: true, watched: false};
};

var framework = function(files) {
    files.push(pattern(path.join(__dirname, 'radii-adapter.js')));
    files.unshift(pattern(path.resolve(require.resolve('radii'))));
};

framework.$inject = ['config.files'];
module.exports = {'framework:radii': ['factory', framework]};