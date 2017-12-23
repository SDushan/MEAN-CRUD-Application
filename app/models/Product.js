// grab the mongoose module
var mongoose = require('mongoose');
var Schema       = mongoose.Schema;

var productSchema = new Schema({
	name : {
		type : String,
		required : true
	},
	description : {
		type : String,
		required : true
	},
	category : {
		type : String,
		required : true
	},
	price : {
		type : Number,
		required : true
	}
});
// define our food model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Product', productSchema);
