let student = {
    name: "Rohan",
    age: 21,
    course: "AIML",
    greet: function() {
        return `Hello, my name is ${this.name}, I study ${this.course}`;
    }
};
console.log("Student Object:", student);
console.log(student.greet());
