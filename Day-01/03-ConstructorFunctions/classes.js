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
*/

SalaryCalculator.prototype.instance = (function(){
    var count = 0;
    return {
        increment : function(){ ++count ;},
        getCount : function(){ return count;}
    }
})()

function SalaryCalculator(basic, hra, da, tax){
    this.basic = basic;
    this.hra = hra;
    this.da = da;
    this.tax = tax;
    this.salary = 0;
    this.instance.increment();

}

 SalaryCalculator.prototype.calculate = function(){
        var gross = this.basic + this.hra + this.da;
        this.salary = gross * ((100-this.tax)/100);
    }











