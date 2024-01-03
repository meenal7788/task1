function calculateGrade() {
    const scoreInput = document.getElementById('score').value;
    const score = parseFloat(scoreInput);
  
    if (isNaN(score) || score < 0 || score > 100) {
      document.getElementById('gradeResult').innerText = 'Please enter a valid score between 0 and 100.';
      return;
    }
  
    let grade = '';
  
    if (score >= 90) {
      grade = 'A';
    } else if (score >= 80) {
      grade = 'B';
    } else if (score >= 70) {
      grade = 'C';
    } else if (score >= 60) {
      grade = 'D';
    } else {
      grade = 'F';
    }
  
    document.getElementById('gradeResult').innerText = `Your grade is: ${grade}`;
  }