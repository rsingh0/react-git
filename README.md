# react-git
full stack react 

#Tech-Stack

# Step 1 - Initialise this project as npm project (package.json)
npm init -y

# Step 2 - Add React and ReactDOM dependencies
npm i react react-dom

# Step 3 - Install development dependencies
npm i -D @babel/core @babel/preset-env @babel/preset-react babel-loader file-loader css-loader sass-loader sass webpack webpack-cli style-loader

webpack and webpack-cli helps in bundling our code, so that it can be ready for browser

sass and sass-loader helps in converting sass files into css

css-loader helps in adding css in our ultimate html document

style-loader will create style tag in our html output file against all the styles that are converted from sass

file-loader - This will help us load our html file into output dir

babel related lib will convert ES6 (Mordern JS code) to ES5 so that our code can be compatiable to older browser (IE)

# Step 4 Add babelrc file

# Step 5 Add webpack.config.js file

# Step 6 Add src directory and react code
App.js
App.scss
index.html
index.js

# Step 7 Add script for webpack dev server in package.json

# Step 8 Add webpack-dev-server dev dependency
npm install -D webpack-dev-server

# Step 8 Start webpack Dev server
npm run start

# Step 9 Add script for build in package.json

# Step 10 Run build
npm run build

# Step 11 Install Docker Desktop

# Step 12 Add Docker File and dockerignore

# Step 13 Add nginx configuration file

# Step 14 docker build
docker build -t rsingh141989/react-git:latest .

# Step 15 run docker locally
docker run -p 8080:443 rsingh141989/react-git:latest

# Step 16 deploy image in Cloud run in GCp with CI/CD


# Helpful Links
https://www.youtube.com/watch?v=QliwSwWHJoQ&ab_channel=LachlanMiller
https://www.youtube.com/watch?v=WDpxqopXd9U&ab_channel=JuniorDeveloperCentral
https://www.youtube.com/watch?v=GIM5irN4Ix0&ab_channel=DylanGonzales
