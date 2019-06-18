# Divvy

## Deployed Link
https://vast-gorge-37663.herokuapp.com/

<img width="1440" alt="Screen Shot 2019-06-17 at 6 56 44 PM" src="https://user-images.githubusercontent.com/43662571/59654425-f2e1c300-914a-11e9-9ed4-4177e5de8695.png">
<img width="1440" alt="Screen Shot 2019-06-17 at 6 58 03 PM" src="https://user-images.githubusercontent.com/43662571/59654426-f2e1c300-914a-11e9-9415-63fcd8f28911.png">
<img width="1440" alt="Screen Shot 2019-06-17 at 6 58 21 PM" src="https://user-images.githubusercontent.com/43662571/59654427-f2e1c300-914a-11e9-8a63-fb2cbb3bede8.png">


# About
_Divvy_ is a bill splitting application for those sharing a home space. Divvy makes it easy to split bills that are common to a household i.e. internet, water, power. 

# Description
Upon page load, the user is asked to either sign in or make an account. Post logging in, the user can create bills and add other payers to the bill using their email addresses. Each bill entered will include the bill title, bill company, price of bill and specific amount each email address entered owes. There is a _settle up_ option included on the page which links the user to venmo.

# Results
_Divvy_ implements a MySQL database to store user profiles, bills, and user-bill associations by using Sequelize.js as an object relational Mapper. A RESTful API is exposed on an express.js server. Extensive API documentation on the REST routes are also available for viewing.

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
https://vast-gorge-37663.herokuapp.com/api

## Run Development server
```
npm run watch
```

# Seed database
```
node ./dbSeeds/seeds.js
(wait a few seconds)
ctrl + c
or
cmd + c
```
