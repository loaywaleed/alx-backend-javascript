interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
};

const student_1: Student = {
  firstName: "Percy",
  lastName: "Jackson",
  age: 22,
  location: "camp halfblood"
};

const student_2: Student = {
  firstName: "Annabeth",
  lastName: "Chase",
  age: 21,
  location: "camp halfblood"
};

const studentsList: Student[] = [student_1, student_2];

const renderTable = () => {
  const table = document.createElement("table");
  studentsList.forEach(student => {
    const firstName = table.insertRow().insertCell();
    firstName.innerHTML = student.firstName;
    const location = table.insertRow().insertCell();
    location.innerHTML = student.location;
  });
  document.body.appendChild(table);
}


