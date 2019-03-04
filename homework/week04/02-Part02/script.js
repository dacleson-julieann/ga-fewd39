var a = prompt("enter a number");
var b = prompt("enter a second number");

function max(a,b){
 	if(a > b){
		alert(a + " is the greater number")
 		return a;
 	}else{
 		alert( b +" is the greater number");
 		return b;
 	}

 }
document.write(max(a,b));

// function max() {
// return Math.max.apply(Math, arguments);
//
	// arguments=> the arguments passed in
// }
//
// alert( max("5","9","-1","6") ); //9
//
// var a = prompt("enter a number");
// var b = prompt("enter a second number");
// var c = prompt("enter a third number");
//
//
// function max(a,b,c){
//   if(a > b && a > c){
//   alert(a + " is the greater number");
//   return a;
//   }else if(b > a && b > c){
//   alert(b +" is the greater number");
//   return b;
//   }else{
//   alert( c +" is the greater number");
//   return c;
//   }
// }
//
// document.write(max(a,b,c));
