let person = {
    name : "venkat",
    age : 1,
    dob :"2024",
    gender : "male"
}

console.log(person);
//dot notation

console.log(person.age);

//bracket notation

console.log(person["name"]);

//change element
console.log("before=",person.age)

person.age = 2;

console.log("after=",person.age)

console.log("before=",person["name"])

person["name"] = "vishnu";

console.log("after=",person["name"])

// add a element
person.number = "983989339"
console.log(person);

const person2 = {
    name : "hari",
    habit : ["chess","games"],
    role : function () {
        console.log("run")
    }
}
console.log(person2.habit[0],person2.role)