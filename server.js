const nodemon = require('nodemon');
const path = require('path');

nodemon({
  execMap: {
    js: 'node'
  },
  script: path.join(__dirname, 'dist/server'),
  ignore: [],
  watch: process.env.NODE_ENV !== 'production' ? ['dist/*'] : false,
  ext: 'js'
})
.on('restart', function() {
  console.log('Server restarted!');
})
/* .once('exit', function () {
  console.log('Shutting down server');
  process.exit();
}) */;
