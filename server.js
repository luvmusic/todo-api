var express = require("express");
var app = express();

const PORT = process.env.PORT || 3000;

var todos = 
[{
	id: 1,
	description: "Meet mom for lunch.",
	completed: false	
},
{	id: 2,
	description: "Go to market.",
	completed: false
},
{	id: 3,
	description: "Fill gas tank.",
	completed: true
}];
	
app.get("/", function(req, resp)
{
	resp.send("Todo API Root");
});

app.get("/todos", function(req, res)
{
	res.json(todos);
});

app.get("/todos/:id", function(req, res)
{
	console.log(req.method + " " + req.originalUrl);
	
	var requestedID = req.params.id;
	var matchedToDo;
	
	todos.forEach(function(todo)
	{
		if (todo.id === requestedID){
			matchedToDo = todo;
		}
	});
	
	if (matchedToDo)
	{
		res.json(matchedToDo);
	}
	else
	{
		res.status(404).send(); // not found		
	}
});

app.listen(PORT, function()
{
	console.log("Express listening on port " + PORT + ".");
});