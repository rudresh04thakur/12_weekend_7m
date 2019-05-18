var a = 10;
var b = 13;
var c = "1";
var math = {
    "1": function () { return a + b; },
    "2": function () { return a - b; },
    "3": function () { return a / b; },
    "4": function () { return a * b; },
    "0": function () { return "Bye"; }
};
while (c != "0") {
    c = prompt("Enter Your Choice");
    alert(math[c]());
}
// if(c==1){
//     alert("Addition is "+(a+b))
// }else if(c==2){
//     alert("Substraction is "+(a-b))
// }else if(c==3){
//     alert("Division is "+(a/b))
// }else if(c==4){
//     alert("Multiplication is "+(a*b))
// }else if(c!=0){
//     alert("Wrong Choice");
// }else{
//     alert("Bye")
// }
