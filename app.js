let studentname = "salma";
let studentage = 21;




function greet(name) {
    return "welcome, " + name + "!";
}
console.log(greet("Alice"));

greet(studentname);


console.log("name"+studentname);
console.log("age"+studentage);

if  (studentage >= 18) {
    console.log("You are an adult.");
}