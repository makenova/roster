# OKCoders Roster

A roster project to stave off boredom for advanced students in OKCoders

## Run
Below, I have provided two ways to run the application. One is simple but is
slightly less convenient and the other requires more initial setup but will
make working for extended periods of time less tedious.

### Simple
The following instructions will run the application so you can get started
developing immediately.
 * install dependencies
  * `npm install --production`
 * run the node server
  * `npm start`

### Advanced
If you setup the project as described above, you will need to restart your node
server every time you change server code (Anything not in your the public
directory) and refresh the browser window every time you change client side code.
For slightly better development experience, you can install all the dependencies,
including the dev-dependencies, with the following command:

    `npm install`

You will also need to install `supervisor` globally with:

    npm install -g supervisor

run your app with `supervisor` instead of `node` and it will watch your project
folder and restart the server when it detects changes. Start the server
with the following command **instead** of `npm start`

    `supervisor bin/www`

![supervisor](http://i.imgur.com/g9B9Tit.png)

Install the chrome live reload [extension](http://goo.gl/FPVV4U) to automatically
refresh the browser when you make changes to your client side code and your
template files. In a separate terminal, start the gulp watch task with:

    gulp

![alt tag](http://i.imgur.com/xSxBHxN.png)

In your browser go to http://localhost:3000 and click on the live reload extension
icon to start the live reload server. The circle in the middle of it should be
filled in.

## TODO
- [x] add student page  
- [ ] add about page
