const { createComponentName } = require('../create-component-name/index.js');
const { config } = require('../config.js');


/**
 * @returns {object} { dirname, componentName }
 */
function getNamesByConfig() {
  const
    cmds = config.path?.split(`/`)?.map(it => it.toLocaleLowerCase()),
    l    = cmds.length;

  let dirName = cmds[0];
  
  if (l > 1) {
    for (let i = 1; i < l; i++) {
      dirName += `/` + cmds[i];
    }
  }
  
  return {
    dirName,
    componentName: createComponentName(cmds[l - 1])
  }
}

module.exports = {
  getNamesByConfig
};
