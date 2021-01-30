# WebsiteRebuild
I decided to do a rebuild of my website using Node and Express. GitHub Pages was a great place to start work on my website, but one limitation I found is that images visibly were loading seconds after the page was refreshed. I could have chosen to reduce the quality of the images, but I decided this was a perfect opportunity to my website onto a new platform. I also was excited to learn Node and Express. Since GitHub pages already has a limitation that websites be static, Express/Node seemed like the perfect combination to migrate my static website. I chose Heroku on the recommendation of a friend, and because it's free and owned by a reputable organization (Salesforce). I also can build on the Node/Express stack (i.e adding MongoDB for storing blog posts, adding React or Angular for dynamic pages). Right now I'm happy with my static pages loaded via pug files, as I enjoy working with template engines. But maybe in the future, I will decide that I want to add dynamic content, and migrate to React (or Angular).

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


**Fonts**
Favicon.io generated using the free generator here https://favicon.io/favicon-generator/

Font - Averia Serif Libre

**Bootstrap 4**
I am using Bootstrap 4 for navigation, carousel, and other web page elements.

**PUG**
I am using the PUG template engine for compiling into HTML files.

**SCSS**
I decided to use SCSS because I can override bootstrap themes with my own stylesheet, as specified in the Bootstrap docs. For this to work, I changed by header so that the bootstrap styles and JS are coming from the local node installation rather than the bootstrap CDN.

* npm install -g sass

After that above command, 

* sass public/scss/style.scss public/css/style.css

Generates the CSS from SCSS file (as in the sass docs: https://sass-lang.com/dart-sass)

These docs show how to use Bootstrap with SCSS/SASS:
https://getbootstrap.com/docs/4.6/getting-started/theming/
