var c;
var o;
function detectscreen(count){
c=count;
var h,w,r;
h = window.screen.availHeight;
w = window.screen.availWidth;
console.log(h,'x',w);
r=h/w;
console.log(r);
console.log(c+" div");
if(r<1){
	console.log("It's a landscape");
	var text;
	var i = 1;
	while(i<=c){
		text = "div" +i;
		i=i+1;
		document.getElementById(text).className = "indexclass1";	
        o=0;	
	}
	console.log("Realignment complete!");
}else if(r>1){
	console.log("It's a potrait");
	var text;
	var i = 1;
	while(i<=c){
		text = "div" +i;
		i=i+1;
		document.getElementById(text).className = "indexclass2";
		o=1;
	}
	console.log("Realignment complete!");
}else if(r=1){
	console.log("It's a square");
}
}
var supportsOrientationChange = "onorientationchange" in window,
    orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";
window.addEventListener(orientationEvent, function() {
	console.log("Screen Rotated!");
	detectscreen(c);
}, false);