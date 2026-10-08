    //Array of students
let studentsList = ["Joy Dimacausad", "Arlene Panlipunan", "Xzy Burnale", "Kweenee Sirena", "Gian Bernardino"];

//Display the initial list of students and its length on the webpage
function display() {
    document.getElementById("arrayLength").textContent = "Total Students (Length): " + studentsList.length;
    let listItems = "";
    for (let i = 0; i < studentsList.length; i++) {
        listItems += "<li>" + studentsList[i] + "</li>";
    }
    document.getElementById("students").innerHTML = listItems;
}

//Add student function
function addStudent() {
    let inputField = document.getElementById("studentName");
    let newStudent = inputField.value.trim();

    if (newStudent === "") {
        resultOutput("Please enter a student name.");
        return;
    }

    let validChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZñÑ ";
    let isValid = true;

    for (let i = 0; i < newStudent.length; i++) {
        if (validChars.indexOf(newStudent[i]) === -1) {
            isValid = false;
        }
    }

    if (!isValid) {
        resultOutput("<span style='color: red;'>Oops. Names can only contain letters and spaces. No symbols or numbers allowed!</span>");
    } else {
        studentsList.push(newStudent);
        display();
        resultOutput("Successfully added <strong>" + newStudent + "</strong> to the list.");
        inputField.value = "";
    }
}

//Remove last student function
function removeLast() {
    if (studentsList.length > 0) {
        studentsList.pop();
        display();
        resultOutput("Last student removed successfully.");
    } else {
        resultOutput("<span style='color: red;'>The list is already empty! Cannot remove any more students.</span>");
    }
}

//Find student by index function
function findByIndex() {
    let indexInput = document.getElementById("searchIndex").value;

    if (indexInput === "") {
        resultOutput("Please enter an index number.");
        return;
    }

    let index = parseInt(indexInput);

    if (studentsList.length === 0) {
        resultOutput("<span style='color: red;'>The list is empty. Nothing to find.</span>");
    } else if (index < 0 || index >= studentsList.length) {
        resultOutput("<span style='color: red;'>Invalid Index! Please enter a number between 0 and " + (studentsList.length - 1) + ".</span>");
    } else {
        let foundStudent = studentsList[index];
        resultOutput("Student found at index " + index + ": <strong>" + foundStudent + "</strong>");
    }
    document.getElementById("searchIndex").value = "";
}

//Join students function
function joinStudents() {
    if (studentsList.length > 0) {
        let joinedString = studentsList.join(", ");
        resultOutput("Joined List: " + joinedString);
    } else {
        resultOutput("<span style='color: red;'>Nothing to join. The student list is empty.</span>");
    }
}

//Convert array to string function
function convertToString() {
    if (studentsList.length > 0) {
        let stringForm = studentsList.toString();
        resultOutput("String Form: " + stringForm);
    } else {
        resultOutput("<span style='color: red;'>Nothing to convert. The student list is empty.</span>");
    }
}

//Shows a message in the Result section
function resultOutput(message) {
    document.getElementById("results").innerHTML = message;
}
// Shows the initial list when the page loads
display();