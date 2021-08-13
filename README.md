# affinity-webapp-back-end
```  
> dependencies
    |--cors: "^2.8.5",
    |--csv-parser": "^3.0.0",
    |--express": "^4.17.1",
    |--multer": "^1.4.3"
```
### deployed in heroku
link: https://affinity-webapp-back-end.herokuapp.com/

### HTTP requests routes
```
GET: '/files'           : responds list of files stored in server public/uploads folder
GET: '/files/:name'     : responds the mentioned :name file data to the client
POST: '/upload-file'    : used to upload a local (.csv, .xlsx, .xls, .txt) file to the server
DELETE: '/files/:name'  : used to delete the mentioned :name file in the server
```