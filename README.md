# Divvy

# Deployed

# About
_Divvy_ is a bill splitting application for those sharing a home space. Divvy makes it easy to split bills that are common to a household i.e. internet, water, power. Upon page load, the user is asked to either sign in or make an account. Post logging in, the user can create bills and add other payers to the bill using their email addresses. Each bill entered will include the bill title, bill company, price of bill and specific amount each email address entered owes. There is a _settle up_ option included on the page which links the user to venmo.

## Run Development server
```
npm run watch
```

# API Docs

### Install
```
npm install apidoc -g
```
### Create docs files
```
apidoc -i routes/ -o apidoc/ 
```
### Open API docs
```
http://localhost:3000/api/
```

# Seed database
```
node ./dbSeeds/seeds.js
(wait a few seconds)
ctrl + c
or
cmd + c
```

