import {Employee1} from './Other_Packages/Employee'
import {Manager1} from './Other_Packages/Manager'
class Person
{
    private firstName: string;
    private lastName: string;

    constructor(firstName1: string, lastName1: string) 
    {
        this.firstName = firstName1;
        this.lastName = lastName1;
        console.log(this.lastName);
    }

    public getFullName(): string 
    {
        
        console.log(this.firstName);
        console.log(this.lastName);
        return ( `${this.firstName} ${this.lastName}`);
    }

    public setFirstName(): void 
    {
        //this.firstName = firstName2;
        console.log(`First Name`, this.firstName);
        console.log(this.lastName);
    }

    public setLastName(lastname1 : string): void 
    {
        let lName: string = lastname1;
        console.log(`Last Name`, lName);
        obj.getFullName();
    }
}
var obj = new Person("John", "Doe");
obj.getFullName(); // Outputs: John Doe
obj.setFirstName(); // Sets first name to Jane and logs it
obj.setLastName("jaiswal"); // Sets last name to Smith and logs it
var empObj=new Employee1();
empObj.age=25;
console.log(empObj.age); // Outputs: 25
var manObj=new Manager1();
manObj.age=30;
console.log(manObj.age); // Outputs: 30