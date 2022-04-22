const
  fs         = require('fs'),
  { config } = require('./config.js'),
  { getNamesByConfig } = require('./get-names-by-config/index.js');



const { dirName, componentName } = getNamesByConfig(); // process.argv[2]
console.log('dirName, componentName: ', dirName, componentName);

  
const createComponents = new Promise((resolve, reject) => {
  const path = `./${dirName}`;
  if (fs.existsSync(path)) return reject(`Component is exist`);
  console.log(`Start create component:`, componentName);

  fs.mkdir(path, { recursive: true }, (err) => {
    if (err) reject();
    else resolve(path);
  });
});


createComponents.then(async (dirPath) => {
  await fs.writeFile(`${dirPath}/index.jsx`, config.template(componentName), (err) => {
    if (err) Promise.reject(err);
  });

  return dirPath;
})
  .then(async (dirPath) => {
    await fs.writeFile(`${dirPath}/index.module.scss`, ".root {\n\n};\n", (err) => {
      if (err) Promise.reject(err);
    });
    console.log(`Finish create component`);
  
    return dirPath;
  })
  .catch(err => console.log(`Err:`, err));

// node create-components/index.js
