class office {
    name: string;
    year: number;
    address: string;
   constructor(){
       //this.mobile = "8983499246"
   }
    getInfo_o(n,y=2014,a?:string) {
        this.name = n;
        this.year = y;
        if(a==undefined){
            this.address = "Pune"
        }else{
            this.address = a
        }
        
    }
    printInfo_o() {
        console.log("Name ", this.name);
        console.log("Year ", this.year);
        console.log("Address ", this.address)
    }
}

class person extends office {
    name: string;
    age: number;
    mobile: string;
   constructor(){
       super();
       //this.mobile = "8983499246"
   }
    getInfo(n,a=18,m?:string) {
        this.name = n;
        this.age = a;
        if(m==undefined){
            this.mobile = "9604303040"
        }else{
            this.mobile = m
        }
        
    }
    printInfo() {
        console.log("Name ", this.name);
        console.log("Age ", this.age);
        console.log("Mobile ", this.mobile)
    }
}

var p = new person();
p.getInfo("Gopal",18,"8983939246");
p.printInfo()
p.getInfo_o("GB Tech",2016,"Mumbai");
p.printInfo_o()
