var office = /** @class */ (function () {
    function office() {
    }
    office.prototype.getInfo = function (on, oy, oa, n, a, m) {
        this.o_name = on;
        this.o_year = oy;
        this.o_address = oa;
        this.name = n;
        this.age = a;
        this.mobile = m;
    };
    office.prototype.printInfo = function () {
        console.log("Office Name ", this.o_name, "Office Year ", this.o_year, "Office Address ", this.o_address, "Person Name ", this.name, "Person Age ", this.age, "Person Mobile ", this.mobile);
    };
    return office;
}());
var o = new office();
o.getInfo("GB Tech", 2014, "Pune", "Gopal", 27, "8983499246");
o.printInfo();
