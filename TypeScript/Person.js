"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee_1 = require("./Other_Packages/Employee");
var Manager_1 = require("./Other_Packages/Manager");
var Person = /** @class */ (function () {
    function Person(firstName1, lastName1) {
        this.firstName = firstName1;
        this.lastName = lastName1;
        console.log(this.lastName);
    }
    Person.prototype.getFullName = function () {
        console.log(this.firstName);
        console.log(this.lastName);
        return ("".concat(this.firstName, " ").concat(this.lastName));
    };
    Person.prototype.setFirstName = function () {
        //this.firstName = firstName2;
        console.log("First Name", this.firstName);
        console.log(this.lastName);
    };
    Person.prototype.setLastName = function (lastname1) {
        var lName = lastname1;
        console.log("Last Name", lName);
        obj.getFullName();
    };
    return Person;
}());
var obj = new Person("John", "Doe");
obj.getFullName(); // Outputs: John Doe
obj.setFirstName(); // Sets first name to Jane and logs it
obj.setLastName("jaiswal"); // Sets last name to Smith and logs it
var empObj = new Employee_1.Employee1();
empObj.age = 25;
console.log(empObj.age); // Outputs: 25
var manObj = new Manager_1.Manager1();
manObj.age = 30;
console.log(manObj.age); // Outputs: 30
