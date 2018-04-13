

var mongoose = require("mongoose");

var noteSchema = new Schema ({
notes:{ type:string,
		unique:true}

})
 var Note = mongoose.model('Headline', NoteSchema);

 module.exports = Note;