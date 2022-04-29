const
  template = require('./templates/index.js'),
  { Type } = require('./types.js');


const config = {
  type: Type.component,
  // path: `src/components/layout`,
  path: `src/pages/contacts`,
  template: template.component,
  // type: Type.componentTest,
  // path: `src/features/basket/ui/basket-product/__tests__`,
  // template: {
  //   component : template.componentTest,
  //   mocks     : template.mocksTest
  // }
};

module.exports = {
  config
};

// node create-components/index.js
