const fs = require('fs-extra');
const paths = require('../config/paths');
const path = require('path');

copyPackageJson();

function copyPackageJson() {
  fs.copyFileSync(paths.appPackageJson, path.join(paths.appBuild, 'package.json'), {
    dereference: true
  });
}
