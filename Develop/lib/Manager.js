// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    // constructor('Jason Chang','jason@gmail.com', 'id_1','001'){
    constructor( officeNumber){
        this.officeNumber = officeNumber;
        

    super(name, id, email);
    
    
    }



    getRole(){
        return Manager;
    }

 
}

module.exports = Manager;
