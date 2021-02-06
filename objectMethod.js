const normalPerson={
    firstName:'mainul',
    lastName:'islam',
    salary:3000,
    getFullName:function(){
        console.log(this.firstName,this.lastName);
    },
    getAmount:function(amount){
        this.salary=this.salary-amount;
        return this.salary;
    }
}

console.log(normalPerson.getAmount(1000));