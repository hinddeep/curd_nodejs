module.exports.insert = function(db, i, fname, lname)
{	
	console.log("enter insert");
			db.stud.save({'id':i,'FirstName':fname,'LastName':lname},function(err, saved){
								
				if( err || !saved )
					{ 
					console.log("Record not saved"); 				
					}
				else {
					console.log("Inserted Successfully!"); 
				}
			});
};