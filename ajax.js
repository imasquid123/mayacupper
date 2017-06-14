 
        	//function sendInJSON(username, password){
        	//How do I tell JSON that username is #username? A: as far as I know, it should be fine?????????
        	//How do I tell JSON where to send the stringified data? A: Don't I do that in jquery?
        	//I need to decide when I want sendInJSON to execute. I don't want it to send until I've gotten the vals in handleClick.
           	 
            	/*var JSONusername = JSON.stringify(username);
            	var JSONpassword = JSON.stringify(password);
            	var xhttp = new XMLHttpRequest();
 
            	//TODO: is dis the right url tho
            	//TODO: do I make a string out of JSON vars tho
            	xhttp.open(POST, "http://localhost/series/dosthwdata.php", true, JSONusername,JSONpassword);
            	xhttp.send();
            	*/
        	//}
 
    	function handleClick(){
 
 
        	//Gets the value from the user input
        	var username = $("#username").val();
        	//Is this a variable or an object???????
        	var password = $("#password").val();
        	//any data validation
        	$.ajax({
            	//Does the above have a way to access the value?
            	//add done and fail
            	type: "POST",
            	url: "/var/www/html/compareInfo.py",
            	data: {
                	"username" : username
                	"password" : password
 
            	}
 
                	success: function:(data){
                    	$("#Response").prepend("<p> This Worked! </p>");
                	}
        	})
 
        	return false;
    	}    
    	//Maps the action to the submit click
        	$(document).ready(function(){
            	//$("button").click(handleClick);
 
            	// Mysql can insert data, create a mysql doc and send data to it??
 
            	/*
                	$.post("dosthwdata.php", {
                    	password:  password, //user input- I need to add another form submission piece. I need something to store the information in.
                    	username:  username //user input
                	});
                   	 
            	*/
        	});