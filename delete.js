var crudr = require('./read.js');

module.exports.del = function(db, id, res)
{
	console.log("enter delete");			
			
			db.stud.remove({'id':id},function(err, deleted){				
			if( err || !deleted )
				{ console.log("Record not deleted"); 
				}
			else {
				console.log("Record " + id + " Deleted Successfully!"); 
				crudr.populate_table(res, db);
			}});
}