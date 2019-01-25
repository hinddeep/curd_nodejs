/* 
Coded By: Hinddeep Purohit
Email: hinddeep.purohit007@gmail.com
*/


var http = require('http');
var url = require('url');
var querystring = require('querystring');
var mongojs = require("mongojs");
var crudi = require('./insert.js');
var crudu = require('./update.js');
var crudd = require('./delete.js');
var crudr = require('./read.js');

var port_num = 5000;
var dburl = "student";
var collections = ["stud"];
var db = mongojs(dburl, collections);
var i = 1;
var store = '';
var json = {};

function onRequest(req, res)
{	

console.log(req.method);
res.writeHead(200,{'Content-Type':'text/html'});	
	if(req.method=='POST')
	{
		try{
			store = '';
			req.on('data', function(data) 
			{
				console.log("start store: "+store);
				store += data;
			});
			req.on('end', function() 
			{  
		console.log("store: "+store);		
				json = JSON.parse(store);
				console.log(json.type);				
			});	
		}
		catch(err){}

	if((req.url).localeCompare("/favicon.ico") != 0)
	{		
		console.log("if");
		var id = parseInt(json.id);
		
		switch(json.type)
		{	
			case "delete":	crudd.del(db,id,res);							
				break;
			
			case "update":  crudu.update(db,id,json.fname,json.lname);
							res.end();
				break;
			default:
			console.log("default case!");
		}				
	}
	}
	else{		
	var query = url.parse(req.url).query;	
	var fname = querystring.parse(query)["fname"];
	var lname = querystring.parse(query)["lname"];
	
	if (typeof lname !== 'undefined'){
		console.log(lname);
		crudi.insert(db,i,fname,lname)
		console.log("insert");
		crudr.populate_table(res,db);
		i++;
		}
	}
}

var server = http.createServer(onRequest).listen(port_num);
console.log('Server started on port number ' + port_num);