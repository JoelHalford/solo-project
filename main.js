function clearReg() {
	document.querySelector("#username").innerHTML = "";
}

function validation(){
	var element = document.querySelector("#username");
	var alphaExp = /^[a-zA-Z]+$/;
	if (element.value == ""){
		console.log("Field is empty");
		return false;
	}
	if (!(element.value.match(alphaExp))){
		console.log("Tried to use illegal character");
		return false;
	}
}