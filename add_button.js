console.log("html");

var test = document.getElementById("test");
var menu = document.createElement('ul');
var item1 = document.createElement('li');
var item2 = document.createElement('li');
item1.innerHTML = "치킨";
item2.innerHTML = "짜장면";
menu.appendChild(item1);
menu.appendChild(item2);

var readInput = function(){
 	var input = document.getElementById('input1');
	console.log(input.value);
	}

var btn1 = document.getElementById("btn1");
btn1.onclick = readInput;