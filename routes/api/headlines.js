// Route for getting all headlines from the db
app.get("/Headline", function(req, res) {
  // Grab every document in the headlines collection
  db.Headline.find({})
    .then(function(dbheadline) {
      // If we were able to successfully find headlines, send them back to the client
      res.json(newdb);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});
}