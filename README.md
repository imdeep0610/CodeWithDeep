# REACT STORY
Episode 2
NPM -> its a repo which hosted all the packages required to istall in our system
its full form is not Node Package Manager

Package.json -> it will give a json file having all the packages [also called dependencies] which we need in our projects 
                and NPM manages these packages
                basically contains all configuration of all the packages

node_modules -> it contains all the data/code of all the packags. Its very huge(never put it in github) so always put in in .gitignore 
create a .gitignore file and write -> /node_modules 

NOTE: If we have package.json and package-lock.json , we can recreate node_modules just by npm install command

The most important packages in our projects is BUNDLERS (it basically bundles, minified , cached , cleaned , compressed our whole code of html , js , css file before send to production -> Webpack , Parcel , Veet) . These bundlres comes as node packages so we can install it -> npm install -D parcel
Here -D is saying its a dev dependencies (means its used in development only not in production)
By writing -D we say to npm that we need parcel in our app but as dev dependencies not as normal dependencies
There are two types of dependencies -> 1. DEV dependencies  2. PRODUCTION dependencies   
*create-react-app uses Webpack bundlers        

"devDependencies": {
    "parcel": "^2.14.4"
  }
Here ^ -> caret -> basically used to update the even minor changes in the version like 2.14.4 to 2.14.5 , it will automatically chnages if we use ^ in the package.json
~ -> tilde -> it will only update major version changes like 2.14.4 to 3.0.0 
always prefer ^ bcoz any major changes can affect our code  , if we put nothing , react will never update the version

package.json will track the approx version of packages while package-lock.json will keep exact version of 

NOTE : In an app every dependencies/package has its own package.json which contains that package required deendencies

Transitive dependency -> the package/dependencies we install in our app may need some dependencies for themselves also , that is called Transitive dependency. So when we install our required package , these also get installed.


npx parcel index.html  (index.html is source file)
here parcel has created a server for us and hosted our app on local host 1234 or any
basically parcel will go to source index.html and bulid a development build for our app
npx -> it will execute the package (here parcel)


NOTE : Never bring react through CDN links , always do this through installing the npm package -> npm intall react  & npm install react-dom
if we do it through CDN links , the version will not get uodated and it will also involve calling something from different network
so , add it in node_modules only


# PARCEL
It will do dev build -> set Local server 
HMR -> Hot Module Replacement -> means if we do any changes it will again do the dev build automaticallym -> it has a file called .parcel-cache which will give the already used data making it faster also
      using FILE WATCHING Algorithm (which is written in C++)
It will build faster due to CACHING (check in node_modules)  
Image Optimization , Minification , Bundling , Compress , Consistent Hashing , Code splitting 
Differential Bundling -> support older browser
Better Error Handling
Tree Shaking -> if we have lots of code but we need 4-5 lines of code only , parcel will do tree shaking for us
                means it will remove unused code for us
Provide HTTPs also
Different build for DEV and production(it will take little more time)

# Support Older Browser version
it can be done using  "browserslist" package present in node_module , just add it in package.json and tell which version of browser our app need to support

 "browserslist":[
    "last 3 Chrome version",
    "last 4 Firefox version",
    "last 2 version"  -> this will support last 2 version of all browser 
  ]
It will take an array -> the mentioned one will support definitely but other may or may not  
          