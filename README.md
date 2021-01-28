# WebsiteRebuild
I decided to do a rebuild of my website using Node and Express. GitHub Pages only supports static websites. Express is typically a backend-only framework. However, it can be used to serve static web pages. This rebuild would be useful if I ever decide to move my website off of GitHub pages onto a server (and also great for learning!) 

**Current website:**
matthewfogel.ca

**Heroku URL**
https://canuckwebsite.herokuapp.com/

**server project run instructions**
* open command prompt
* cd to the directory, WebsiteRebuild/server
* *First Time Only*: npm install.
* npm start OR the below code
    npx cross-env DEBUG=nodewebsite:* npm start
