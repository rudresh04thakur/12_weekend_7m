var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var office = /** @class */ (function () {
    function office() {
        //this.mobile = "8983499246"
    }
    office.prototype.getInfo_o = function (n, y, a) {
        if (y === void 0) { y = 2014; }
        this.name = n;
        this.year = y;
        if (a == undefined) {
            this.address = "Pune";
        }
        else {
            this.address = a;
        }
    };
    office.prototype.printInfo_o = function () {
        console.log("Name ", this.name);
        console.log("Year ", this.year);
        console.log("Address ", this.address);
    };
    return office;
}());
var person = /** @class */ (function (_super) {
    __extends(person, _super);
    function person() {
        return _super.call(this) || this;
        //this.mobile = "8983499246"
    }
    person.prototype.getInfo = function (n, a, m) {
        if (a === void 0) { a = 18; }
        this.name = n;
        this.age = a;
        if (m == undefined) {
            this.mobile = "9604303040";
        }
        else {
            this.mobile = m;
        }
    };
    person.prototype.printInfo = function () {
        console.log("Name ", this.name);
        console.log("Age ", this.age);
        console.log("Mobile ", this.mobile);
    };
    return person;
}(office));
var p = new person();
p.getInfo("Gopal", 18, "8983939246");
p.printInfo();
p.getInfo_o("GB Tech", 2016, "Mumbai");
p.printInfo_o();
