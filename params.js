pp.get("/contact", (req, res) => {
  res.send("<h1> Contacts Home Page </h1>");
});

app.get("/contacts/:contactID", (req, res) => {
  //this is how we access url parameters from req.params
  const contactID = req.params.contactID;

  res.send(`<h1> Individual Contact Page for contact ${contactID}</h1>`);
});
//Routes that support query parameters

app.get("/phonebook", (req, res) => {
  //we access query parameter from req.query
  const skip = req.query.skip || 0;
  const limit = req.query.limit || 0;

  res.send(`<h1>Phonebook</h1> Skip: ${skip}, Limit: ${limit}`);
});
