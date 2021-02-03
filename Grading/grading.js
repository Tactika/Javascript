let inputGrade = prompt("Please enter your grade score?");

function calc_grade (inputGrade) {
    if (inputGrade >= 90 && inputGrade <= 100) {
        alert('Congratulations, you have earned an \'A\'!');
    } else if (inputGrade >= 80) {
        alert('You\'ve earned a \'B\'.');
    } else if (inputGrade >= 70) {
        alert('You\'ve earned a \'C\'.');
    } else if (inputGrade >= 60) {
        alert('You\'ve earned a \'D\'.');
    } else if (inputGrade >= 0) {
        alert('You\'ve recieved an \'F\'.');
    } else if (inputGrade < 0 || inputGrade > 100) {
        alert('You\'ve entered an invalid number.')
        let inputGrade = prompt("Please enter a valid number from 0 - 100.")
        calc_grade(inputGrade)
    } else {
        let inputGrade = prompt("Please enter a valid number from 0 - 100.")
        calc_grade(inputGrade)
    }
}
calc_grade(inputGrade)