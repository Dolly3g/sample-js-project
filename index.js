var credentials = [{"username": "Bob", "password": "123"}]

var isUserValid = function(username, password){
	return credentials.some(function(user){
		if(user.username==username && user.password==password)
			return true;
		else
			return false;
	})
}

var validateUser = function(){
	var username = $('#username')[0].value;
	var password = $('#password')[0].value;

	if(isUserValid(username, password))
		alert("Success!!");
	else
		alert("Invalid User!")
}

var onPageLoad = function(){
	$("#login").click(validateUser);
}

$(onPageLoad);