# Node Module

We will install a node module into our project that will help us with our development
environment. Up until now, if you want to see changes made to the backend, you would
have to shutdown and restart the server. We will install a package called nodemon
to automate this server restart.

## Getting Started
### Prerequisites

Have node installed. Look at 1-Hello_World directory for instructions.

### Running the app

You can create a project similar to what we did in the last project or you can
clone this repository to get started. Once you have a js file and package.json,
we will install the nodemon package.  
``` 
npm install --save-dev nodemon
``` 
Now we need to add a dev script in package.json. 
``` 
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
``` 
When we run ``` npm run dev ```, we can see nodemon at work. When you change the
index.js file and save it, the server will automatically restart. Voilà!



