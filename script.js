const taskList = ["Log out and back in","Open My Team Listing","Edit an emergency contact","View job chats","Pick a report and try to run it"];
const reportList = ["Call List - Select Depot","Call List - Discipline/Absence...","Absence - Select Employee","Disciplinary - Select Emplolyee","Absences by Employee","Absences No End Dates","Age Report Enter min and...","Complaints by Route","Holiday Balance Report","Leavers Report between Dates","Disciplinary Report by Depot...","Commendations and Complaints by..."]

function generateNewTask() {
    let randoNumber = Math.floor(Math.random() * 6);

    if (randoNumber < 4) {
        let newTask = taskList[randoNumber];
        document.getElementById("taskText").innerHTML = newTask;
    } else {
        let whichReport = Math.floor(Math.random() * 12);
        let newTask = "Open the " + reportList[whichReport] + " report"
        document.getElementById("taskText").innerHTML = newTask;
    }
};