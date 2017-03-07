# repair-app
This is a Repair App that my family could use for their landscape business

This repo uses yarn which is a new package manager that works in concert with npm. with yarn the dependencies are more accurately tracked to insure that the same version of the package is installed on every machine.

often times i deactivate my google api key so that there isnt any unwanted use of it since it is in a public space. if you find this to be the case, you can simply replace my key with one of your own.

#### To run this application on your own machine (osX)
1. clone the repo do you local machine
2. install the dependencies via npm
  - `npm install`
            or
  - `yarn install` (if you are using yarn package manager)
3. open the terminal of your machine and get the repo directory
4. start your MongoDB instance. (if you don't have MongoDB installed locally you can get it [here](https://docs.mongodb.com/manual/administration/install-community/))
  - `mongod`
5. start your node.js server to serve the files locally
  - `node server.js`
6. read the console log on your termial to see which port it is running on (current defualt port 8000)
7. go to your web browser and view the application locally
  - `http://www.localhost:8000`
8. to stop the node.js server. go into your terminal and run the stop command
  - `ctrl+c`
9. to stop the mongoDB server. go into your terminal, where the instance is running, and run the stop command
  - `ctrl+c`
