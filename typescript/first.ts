var a:number = 10;
var b:number = 13;
var c: string = "1";

var math = {
    "1":()=>{return a+b},
    "2":()=>{return a-b},
    "3":()=>{return a/b},
    "4":()=>{return a*b},
    "0":()=>{return "Bye"}
} 
// abc = { "name":"Gopal","Age":()=>{}}
// abc["Age"]()
while(c!="0"){
    c = prompt("Enter Your Choice");
    alert(math[c]())
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