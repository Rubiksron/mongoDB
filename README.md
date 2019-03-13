# mongoDB
Setting up MongoDB with mongoose.  Start the frontend server in one command line tab, then perform your CRUD operations in another tab.  Make sure you have the correct connectionString/mongoURI and make sure you have your environmental variables in a .env file or declare them in the same terminal window/command line that you start your server in.

When using httpie to run CRUD operations here are the commands/format to use:

http POST :3000/products/ name=fan description=spiral price=199.99 category=appliances
http DELETE :3000/products/delete/5c8435603687a658d8f770b6   //deletes the product whose ID number matches the value passed.
http PUT :3000/products/5c86b824ce4023bb2b25e65a "name=Crow Jones"     //This will update the name property
http GET :3000/products                                              //Returns all products

