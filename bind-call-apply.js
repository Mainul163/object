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
 const newPerson={
     firstName:'shujon',
     lastName:'ahmed',
     salary:6000

 }
//bind

//  const addNewPerson=normalPerson.getAmount.bind(newPerson);
//  addNewPerson(2000);
//  console.log(newPerson.salary);
//  console.log(newPerson);

 //call

//  normalPerson.getAmount.call(newPerson,2000);
//  console.log(newPerson.salary);


// apply

normalPerson.getAmount.apply(newPerson,[2000]);
console.log(newPerson.salary);
