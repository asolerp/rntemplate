const  inquirer = require('inquirer');
const { exec } = require('child_process');

async function createFreshApp() {
    const {name} = await inquirer.prompt({
        type: 'input',
        name: 'name',
        message: 'Name of your amazing new app 🚀'
      });

      exec(
        `npx react-native init ${name} --template https://github.com/asolerp/rntemplate`
      )

}

createFreshApp().then(() => {
    return 0;
  });