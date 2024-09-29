import express from "express";

const app = express();
//import the JSON parser middleware

app.use(express.json());

app.post("/user", (req, res) => {
  //access the request body using req.body
  const name = req.body.name;
  const email = req.body.email;

  res.send(`User created: ${name}, email: ${email}`);
});
//express function call used to initialize an express backend application
//we are creating an express application instance and assigning it to the app constant

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

//takes 2 parameters
//first parameter is the port number
//second parameter is the callback function
//where we can indicate the code that will run once the server successfully startednpm
app.listen(3001, () => {
  console.log("Server is running on port 3000");
});
