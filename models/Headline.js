

var mongoose = require("mongoose");
//create the schema for headline


var HeadlineSchema = new Schema ({
title:{ type:string,
		unique:true},

		})
 var Headline = mongoose.model('Headline', HeadlineSchema);

 module.exports = Headline;