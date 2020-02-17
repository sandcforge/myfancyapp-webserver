
# myfancyapp Web Server Design Document

## Quick Start

1. git clone <https://github.com/sandcforge/myfancyapp-webserver.git>
2. Run `npm i --save`
3. Run `npm run dev` to see the development app at <http://localhost:8080>.
4. Run `npm run prod` to see the production app at <http://localhost:8080>.
5. Run `npm run zip` to generate the zip file for EB deployment.

## Web Application Configs and Constants

There are two files \[app/server\]/utils/constants.js holding all the definitions of constaints. Also configurations are recommended to be placed here.

server/utils/constants.js holds the constants used in backend side, while app/... holds the one used in frontend side.

Currently there is no file to hold the shared constants which could be used in both backend and frontend environments. Two copies should be kept in both files.

## Authentication

### Signup

In MVP, the pair of username/password is the only option for the user to sign up. In future, more oauth2 options (google/facebook) will be integrated.

Username **MUST** be a valid email address, which could be used for password reset.

### Signin

After signin, JWT is attached to the http request authenticaiton header to access authorized pages, like the user profile page or the app editing pages.

### User Signin JWT Payload Format

```json
ver: JWT version
id: user id in the mysql db
exp: expiration timestamp
```

## User Profile

Each user would have a profile once an account is signed up. The profile is physically stored in one table of mysql db, and only part of the profile could be retrieved on front end.

