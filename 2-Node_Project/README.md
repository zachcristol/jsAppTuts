# Node Project

We will use the npm init tool to make a simple node project. You don't need to 
clone this repository, just follow the instructions.

## Getting Started
### Prerequisites

Have node installed. Look at previous directory for instructions.

### Running the app

Often times when you are building app, you aren't going to just start from the 
ground up. You will want to use other packages and tools other people have built.
We need to create a "settings" file for our node project.  
Run ```npm init```  
This will create a package.json file. In the process, it will prompt you for various
things like name, version, description, etc. None of these really matter, pressing
enter will have sensible defaults. You can add a name and description if you're feeling
spicy.  

Look at your package.json, it should look something like this.
```
{
  "name": "spicy",
  "version": "1.0.0",
  "description": "Spicy level 2 please.",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

You can always delete the package.json and start over. We can see in my package.json, 
I specified that the entry-point js file is going to be index.js. So in the same directory,
I am going to create a index.js file and the hello world app in it.  
index.js  
```
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, function(){
  console.log(`Example app listening @ http://localhost:${port}`)
})
```

Now we're not going to run the app by doing ```node index.js``` as we did before.
We are going to add a script to specify how to start the app. Let's go into the 
package.json and add a script. Right now, the test script doesn't do much, so let's
add a start script like this  
```
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js"
```
Make sure your commas are correct. Back on the command line, we are going to run
our app by running.  
```
npm start
```
Woo hoo - we got a development pipeline going.



