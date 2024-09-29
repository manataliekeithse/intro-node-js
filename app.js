import express from "express";

//express function call used to initialize an express backend application
//we are creating an express application instance and assigning it to the app constant
const app = express();

//add a route for homepage
//browsers can only send get requests by default when sending them via url tab
//routes take 2 parameters - 1: path where want to navigate,
//2: callback function where we can specify what we want to do in that specific route
//the call back function for express routes take 2 parameters.
//first is the request object
//second is the response object
app.get("/", (req, res) => {
  //send methods is accessible from the response object
  //this allows us to send data in the route
  res.send("Hello World!");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Welcome to the Contacts Page</h1>");
});

app.get("/log?in", (req, res) => {
  res.send("<h1>Welcome to the Login Page</h1>");
});
//takes 2 parameters
//first parameter is the port number
//second parameter is the callback function
//where we can indicate the code that will run once the server successfully startednpm
app.listen(3001, () => {
  console.log("Server is running on port 3000");
});
