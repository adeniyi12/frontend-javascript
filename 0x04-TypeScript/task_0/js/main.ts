interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Timothy",
    lastName: "Ogbe",
    age: 25,
    location: "Lagos"
}

const student2: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
}

const studentsList: Array<Student> = [student1, student2];

const table = document.createElement("table");
const tbody = document.createElement("tbody");

table.style.background = "lightgray";
table.appendChild(tbody);

studentsList.forEach((student) => {
    const row = document.createElement("tr");
    const firstNameCell = document.createElement("td");
    const locationCell = document.createElement("td");

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});

document.body.appendChild(table);