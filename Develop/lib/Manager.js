// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    // constructor('Jason Chang','jason@gmail.com', 'id_1','001'){
    constructor(name, id, email, officeNumber){
        

    super(name, id, email);

    this.officeNumber = officeNumber;
    // console.log(this.officeNumber);
    }

    getOfficeNumber(){
        return this.officeNumber;
    }

    getRole(){
        return 'Manager';
    }

 
}

module.exports = Manager;
