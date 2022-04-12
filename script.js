const taskList = ["Log out and back in","Open My Team Listing","Edit an emergency contact","View job chats","Pick a report and try to run it"];
const reportList = ["Call List - Select Depot","Call List - Discipline/Absence...","Absence - Select Employee","Disciplinary - Select Emplolyee","Absences by Employee","Absences No End Dates","Age Report Enter min and...","Complaints by Route","Holiday Balance Report","Leavers Report between Dates","Disciplinary Report by Depot...","Commendations and Complaints by..."]
var lastTask = 10;
let matched = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Change bg and heading colour if system darkmode is on
if(matched) {
	console.log('Currently in dark mode');
    document.getElementById("mainBody").style.background = 'black';
    document.getElementById("titleText").style.color = 'white';
}else {
	console.log('Currently not in dark mode');
}


function generateNewTask() {
    let randoNumber = Math.floor(Math.random() * 6);

    if (randoNumber == lastTask) {
        randoNumber = Math.floor(Math.random() * 6);
    }
    
    if (randoNumber < 4) {
        let newTask = taskList[randoNumber];
        document.getElementById("taskText").innerHTML = newTask;
        lastTask = randoNumber;
    } else {
        let whichReport = Math.floor(Math.random() * 12);
        let newTask = "Open the " + reportList[whichReport] + " report"
        document.getElementById("taskText").innerHTML = newTask;
        lastTask = randoNumber;
    }
};