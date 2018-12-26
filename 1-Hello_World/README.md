# HelloWorld

The most simple demonstration of express.

## Getting Started
### Prerequisites

You will need brew to make things easier. Type ``` brew ``` on the command line to see if you have it installed. If you do not, install it with the following command. ``` /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)" ```.

First we need to install node. This is a runtime environment for the javascript to execute in. When you install node, you also get npm, the node package manager which will help install node packages.  
```brew install node```

Lastly, we need to install express, the javascript web framework we will be using.  
``` npm install express ```


### Running the app

Run app.js on the javascript interpreter node by executing.  
```node app.js```  
The script will be hanging, because it is serving a string. To see this string, go to the port that the app is running on: http://localhost:3000
