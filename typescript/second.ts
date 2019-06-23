interface person{
  name:string;
  age:number;
  mobile:string;
}
class account {

}
class office extends account implements person{
    o_name:string;
    o_year:string;
    o_address:string;
    name:string;
    age:number;
    mobile:string;
    getInfo(on,oy,oa,n,a,m){
        this.o_name = on
        this.o_year = oy
        this.o_address= oa
        this.name= n
        this.age= a
        this.mobile= m
    }
    printInfo(){
        console.log(
            "Office Name ",this.o_name,
            "Office Year ",this.o_year,
            "Office Address ",this.o_address,
            "Person Name ",this.name,
            "Person Age ",this.age,
            "Person Mobile ",this.mobile,
        )
    }
}

var o = new office();
o.getInfo("GB Tech",2014,"Pune","Gopal",27,"8983499246")
o.printInfo();