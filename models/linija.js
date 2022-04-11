var mongoose = require('mongoose');

// Schema linija
var linijaSchema = mongoose.Schema({
	destinacija: {
		type: String
	},
	stanica: {
		type: String
	},
	odrediste: {
		type: String
	},
	p1: {
		type: String
	},
	p2: {
		type:String
	},
	p3: {
		type:String
	},
	p4: {
		type:String
	},
	p5: {
		type:String
	},
	p6: {
		type:String
	},
	p7: {
		type:String
	},
	p8: {
		type:String
	},
	p9: {
		type:String
	},
	p10: {
		type:String
	},
	p11: {
		type:String
	},
	p12: {
		type:String
	},
	imeslike: {
		type: String
	}
});

var Linija = module.exports = mongoose.model('Linija', linijaSchema, 'linije');

// Fetch All Classes
module.exports.getLinije = function(callback, limit){
	Linija.find(callback).limit(limit);
}

// Fetch Single Class
module.exports.getLinijaById = function(id, callback){
	Linija.findById(id, callback);
}
