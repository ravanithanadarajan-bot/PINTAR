const dashboardData = {

    schools:42,

    students:12840,

    quizzes:1,

    average:87

};

// Cards

document.getElementById("totalSchools").innerHTML =
dashboardData.schools;

document.getElementById("totalStudents").innerHTML =
dashboardData.students.toLocaleString();

document.getElementById("totalQuizzes").innerHTML =
dashboardData.quizzes;

document.getElementById("averageScore").innerHTML =
dashboardData.average + "%";

// Date

const today = new Date();

document.getElementById("todayDate").innerHTML =
today.toLocaleDateString("en-MY",{

day:"numeric",
month:"long",
year:"numeric"

});