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

There are essentialy 3 views for this app. The about/index page, the class page, and the person details page

- [ ] add about page (which will be the index page).  The index, which gives a description of the roster/alumni page, and two drop down inputs for year, and semester, which will load the class page.
- [ ] add class page. This will still have the year and semester input buttons at the top, but then will have the details for the class, which includes a description of the class, two boxes underneath the description with the professor and TA. Below those two boxes will be 4 boxes across with the students in the class
- [ ] A person details page, this will probably be a closable pop-up on the current page, that will give details on any picture clicked on the page. Most likely the details for the students, professor, and TA will be the same, but different views may be necessary depending on the attributes within each object.



