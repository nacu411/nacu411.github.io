"use strict";

function validation() {
	var validate = prompt("Пароль от блокировки твоего айфона", "Ответ");

	if(validate == '1819'){
		console.log("Чмок")
	} else{
		window.location = 'https://google.com';
	}
}

validation();