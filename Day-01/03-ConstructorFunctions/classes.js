//constructor function
function Employee(id, name, salary){
    this.id = id;
    this.name = name;
    this.salary = salary;
    return "not good";
}

//factory function
function getEmployee(id,name,salary){
    return {
        id : id,
        name : name,
        salary : salary
    };
}

/*Create a SalaryCalculator class that has the follwing attributes
- basic
- hra
- da
- tax
- salary

- calculate() // => populates the salary with the appropriate salary

the user should be able to initialize the object with basic, hra, da, & tax

salary has to be readonly
