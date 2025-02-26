
let students = [];
function createStudent(name, age, mark) {
    return { namestd: name, agestd: age, markstd: mark }
}
students.push(createStudent("tala", 19, 96));
students.push(createStudent("ahmad", 21, 40));
students.push(createStudent("rama", 19, 99));
students.push(createStudent("sami", 20, 49));
students.push(createStudent("rana", 19, 90));

let successStd = [];
let failedStd = [];
for (let i = 0; i < students.length; i++) {
    if (students[i].markstd >= 50) {
        successStd.push(students[i])
    }
    else {
        failedStd.push(students[i])
    }
}
console.log("Success Students:", successStd);
console.log("Failed Students:", failedStd);
