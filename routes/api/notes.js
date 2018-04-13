

app.get("/notes/:id", function(req, res) {
  // Using the id passed in the id parameter, prepare a query that finds the matching one in our db...
  db.Note.findOne({ _id: req.params.id })
    // ..and populate all of the notes associated with it
    .populate("note")
    .then(function(newdb) {
      // If we were able to successfully find an headline with the given id, send it back to the client
      res.json(newdb);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});
// Route for saving/updating an headline's associated Note
app.post("/note", function(req, res) {
  // Create a new note and pass the req.body to the entry
  db.Note.create(req.body)
    .then(function(newdb) {
      // If a Note was created successfully, find one headline with an `_id` equal to `req.params.id`. Update the headline to be associated with the new Note
      // { new: true } tells the query that we want it to return the updated User -- it returns the original by default
      // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
      return db.headline.findOneAndUpdate({ _id: req.params.id }, { note: dbNote._id }, { new: true });
    })
    .then(function(newdb) {
      // If we were able to successfully update an headline, send it back to the client
      res.json(dbnote);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});