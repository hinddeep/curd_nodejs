1) Open command shell and navigate to the directory containing the project.
		Run the following command:
		'npm install mongojs'
	(You need to set the path variable to run npm from the context of any folder)
2) Start Mongodb server by issuing the command: 'mongod'
3) Fire-up mongo shell by typing 'mongo' at the command prompt
4) From the mongo shell, execute the following queries:
	i) use student
	ii) db.createCollection("stud");
5) Open third terminal and start the crud_server.js by entering 'node crud_server.js'
6) Run form.html in your browser
7) Follow on-screen instructions to perform CRUD operations!
8) You can verify that the changes made from crud_server are actually being reflected
	in the database using the following query:
	i) db.stud.find({}).pretty();