class person{
    constructor(firstName,lastName,salary){
        this.firstName=firstName;
        this.lastName=lastName;
        this.salary=salary;
    }

}

const newPerson=new person('mainul','islam',20000);
console.log(newPerson);



// add method in class

class person{
    constructor(firstName,lastName,salary){
        this.firstName=firstName;
        this.lastName=lastName;
        this.salary=salary;
    }
//add method
total(amount){
    this.salary=this.salary-amount;
    return this.salary
}
}

const newPerson=new person('mainul','islam',20000);
console.log(newPerson.total(100));




