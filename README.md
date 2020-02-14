# Quick start

1. git clone <https://github.com/sandcforge/myfancyapp-webserver.git>
2. Run `npm i --save`
3. Run `npm run dev` to see the development app at <http://localhost:8080>.
4. Run `npm run prod` to see the production app at <http://localhost:8080>.
5. Run `npm run zip` to generate the zip file for EB deployment.

# Design

## App Configs and Constants

There are two files \[app/server\]/utils/constants.js holding all the definitions of constaints. Also configurations are recommended to be placed here.

server/utils/constants.js holds the constants used in backend side, while app/... holds the one used in frontend side.

Currently there is no file to hold the shared constants which could be used in both backend and frontend environments. Two copies should be kept in both files.