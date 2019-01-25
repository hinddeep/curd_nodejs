module.exports.update = function(db, id, fname, lname)
{
	console.log("enter update");				
			db.stud.update({'id':id},{$set:{'FirstName':fname,'LastName':lname}},function(err, updated){				
			if( err || !updated )
				{ console.log("Record not updated"); 
				}
			else {
				console.log("Record " + id + " updated Successfully!"); 				
			}});
};