var printSuccessMessage = function(){
	alert("Login Succesful! Welcome");
}

var onPageLoad = function(){
	$("#login").click(printSuccessMessage);
}

$(onPageLoad);