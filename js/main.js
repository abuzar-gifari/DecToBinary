const result = document.getElementById('result');
const submit = document.getElementById('submit');

function binary(e){
	e.preventDefault();
	//console.log('hello');
	const number = document.getElementById('number').value;
	//console.log(typeof(number)); -> String
	
	
	if(number==""){
		alert("Please enter a number");
	}else if(number<0){
		alert("Please enter a positive decimal number");
	}else{
		result.style.visibility = "visible";
	}
	
	//converting
	binaryNumber = Number(number).toString(2);
	result.innerText = binaryNumber;
	
	/***
		For Binary Convertion need to use -> toString(2);
		For Octal Convertion need to use -> toString(8);
		For Hexa-Decimal Convertion need to use -> toString(16);
	
	**/
	
}

submit.addEventListener('click',binary);
