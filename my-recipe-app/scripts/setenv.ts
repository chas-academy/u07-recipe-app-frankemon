const { writeFile } = require('fs');
const { argv } = require('yargs');
// read environment variables from .env file
require('dotenv').config();
// read the command line arguments passed with yargs
const environment = argv.environment;
const isProduction = environment === 'prod';
const targetPath = isProduction
    ? `./src/environments/environment.prod.ts`
    : `./src/environments/environment.ts`;
// we have access to our environment variables
// in the process.env object thanks to dotenv
const environmentFileContent = `
export default {
   production: ${isProduction},
   API_URL: "${process.env.API_URL}",
   ANOTHER_API_SECRET: "${process.env.ANOTHER_API_SECRET}",
   API_KEY: "${process.env.API_KEY}"
};
`;
// write the content to the respective file
writeFile(targetPath, environmentFileContent, (err: any) => {
    if (err) {
        console.log(err);
    }
    console.log(`Wrote variables to ${targetPath}`);
});