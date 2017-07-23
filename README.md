# DynamicRecursiveMeanApp 
## Summary
Inspired from [Dynamic Forms](https://angular.io/guide/dynamic-form) guide using Template Driven Forms with ngModel directive for input data.

There is a content managment component wherewith we can design forms saving metadata in a mongo database.
Retriving the data we can create the model driven form and store the submit result to a colection having the name of the specified form.

## Quick start
### Installing mongoDb:
-Download and install the last version of mongoDB from [MongoDB download center](https://www.mongodb.com/download-center#production)

Create a folder where the data will be stored.
C:\MongoDBData

Open a command prompt to the following folder:
C:\Program Files\MongoDB\Server\3.4\bin (3.4 is the Current Stable Release Version)

Run the command bellow:
mongod --dbpath c:\MongoDBData (MongoDBData is the folder we created above)

The MongoDB server is ready on port 27017

### Clone/Download the repo
Make sure you have Node version >= 6.0 and NPM >= 3

-npm install (to the root folder for the node server)

-npm install (to the client folder for the client application)

Run the node server and the client app

-npm start server (to the root folder for the node server)

-npm start (to the client folder for the client application)
