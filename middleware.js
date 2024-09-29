//DEFAULT EXPRESSJS MIDDLEWARE SYNTAX
app.get("/some-path", (req, res, next) => {
  res.send("This is some path");

  //calling the default expressjs middleware
  next();
});
