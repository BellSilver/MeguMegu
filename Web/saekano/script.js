var c;
function set40(){
	var text;
	var i = 1;
	while(i<=c){
		text = "div" +i;
		i=i+1;
		document.getElementById(text).className = "class1";
		console.log("set "+text+" to 40%");
	}
console.log("Image size at Fourty-Percent!");
document.getElementById("size").innerHTML = "Image size at 40%";
}
function set60(){
	var text;
	var i = 1;
	while(i<=c){
		text = "div" +i;
		i=i+1;
		document.getElementById(text).className = "class2";
		console.log("set "+text+" to 60%");
	}
console.log("Image size at Sixty-Percent!");
document.getElementById("size").innerHTML = "Image size at 60%";
}
function set80(){
var text;
	var i = 1;
	while(i<=c){
		text = "div" +i;
		i=i+1;
		document.getElementById(text).className = "class3";
		console.log("set "+text+" to 80%");
	}
console.log("Image size at Eighty-Percent!");
document.getElementById("size").innerHTML = "Image size at 80%";
}
function set100(){
var text;
	var i = 1;
	while(i<=c){
		text = "div" +i;
		i=i+1;
		document.getElementById(text).className = "class4";
		console.log("set "+text+" to 100%");
	}
console.log("Image size at Hundred-Percent!");
document.getElementById("size").innerHTML = "Image size at 100%";
}
function test(count,f){
	c=count;
	console.log("It's have "+c+" div in this page.");
	if(f === null){
	console.log("No Force Resize");
	}else{
		if(f == 1){
			set100();
		}else if(f == 2){
			set80()
		}else if(f == 3){
			set60()
		}else if(f == 4){
			set40()
		}
	}
}