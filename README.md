# LocalLibrary
Node/Express LocalLibrary tutorial

Tutorial on how to set up a Node/Express website
https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs

The website was launched to production environment using Heroku
https://dashboard.heroku.com/apps

Learning Objectives:
  Node.JS is the runtime environment that is allowing us to run the website locally on our computer as a server. It manages the JS and HTTP requests on the computer.

  Express is the website framework it picks up where Node left off. In this project express is being used to handle Get, Post, Delete, Update requests of our website. its the "middleware" it handles the tasks your project may request or render.
Express is handling our Views through pug and out routes.

Challenges:
  I initially had a tough time understanding what we were even doing, I didn't quite understand why we were using Node/Express to launch a website, when i learned out to do that in web developement class. In this case however we were not using the web developement IDE to launch our website, Brackets and other IDE's have a built in tool to simulate the page for us. Without Node/Express our website would not work outside that environment. so Node is the server tool and express handles some of the (verb) requests a website may execute.
  Once I dug into the project I ran into problems were in the controllers and views. for example, the book instance list page checks for (val) in each (book_instance). I had hard time understanding where book_instance and val came from. in some cases the controller functions would us params.id or body.id or any combination in between and trying to figure out which one to use and what to use soon enough it came back to objects and databases but it was tracking everything back. 
  
Reflection/Looking Forward:
  I am getting more comfortable with the projects, Im finding myself knowing where to look when things go wrong and back tracing an issue. I don't know all of the issues and when i run into a problem. My professor is great at finding it and helping me understand the issues i run into. There are deffinetaly layers of building a fully functional web project i will have to become more familiar with. While most of the code is coming together, knowing when to use certain code is not fully there. If i were to build a project from scratch I may not initially know what i need to build a form, fill teh form with existing data if it's updating, or posting a new created datatype for the database (if that even makes sense, my terminology may be off). in this case what would i need to create a new book or author, without having something to go off of. In the future I will deffinetaly have to look back still untill i fully grasp what i am doing. some of the syntax errors are researchable. Building objects are not too bad, Views. I really don't like how views are used to generate a page. I enjoyed creating an HTML page with CSS classes and id's and adding design to it. something I am looking forward to again.
  
