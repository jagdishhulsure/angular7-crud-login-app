# Angular7CrudAnd Login APP

1. clone the repository https://github.com/jagdishhulsure/angular7-crud-login-app.git
2. do npm install
3. ng serve

For createing Json server
1. go to db.json file directory
2. run command : json-server --watch db.json

IF json server is not install do as follows

1. npm install -g json-server
2. create db.json file and add below content

{
  "users": [
    {
      "id": 1,
      "firstName": "Sebastian",
      "lastName": "Eschweiler",
      "email": "sebastian@codingthesmartway.com"
    },
    {
      "id": 2,
      "firstName": "Steve",
      "lastName": "Palmer",
      "email": "steve@codingthesmartway.com"
    },
    {
      "id": 3,
      "firstName": "Ann",
      "lastName": "Smith",
      "email": "ann@codingthesmartway.com"
    }
  ]
}

3. run command : json-server --watch db.json
