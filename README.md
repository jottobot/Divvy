# Divvy

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