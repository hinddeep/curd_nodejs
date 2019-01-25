var fs = require('fs');

module.exports.populate_table = function(res, db){
	console.log("table");
		
	fs.readFile('CRUD.html', function(error, html){		
		res.writeHead(200,{'Content-Type':'text/html'});
		res.write(html);
		db.stud.find({}, function(error, students){
		if(error || !students)
		{
			console.log("No students found...");
		}
		else
		{
			var i = 1;
			students.forEach(function(student){
				res.write("<tr>");
				var idx = "<td><center>" + i + "</center></td>"; 
				res.write(idx);
				
				idx = '<td contenteditable="true" id="F' + i + '"><center>' + student["FirstName"] + "</center></td>"; 
				res.write(idx);
				
				idx = '<td contenteditable="true" id="L' + i + '"><center>' + student["LastName"] + "</center></td>"; 
				res.write(idx);
				
				idx = '<td><center><button type="button" class="btn btn-success btn-rounded" id="'+i+'"'+' onClick="delet(this.id)">Delete</button></center></td>';
				res.write(idx);
				
				idx = '<td><center><button type="button" class="btn btn-success btn-rounded" id="'+i+'"'+' onClick="up(this.id)">Update</button></center></td>';
				res.write(idx);
				
				res.write("</tr>");
				i++;
				});
		}	
		res.write("</table></center></body></html>");
		res.end();
		});
	});	
};