function submitQuiz() {
  // Get the selected answer
  var selectedAnswer = document.querySelector('input[name="q1"]:checked').value;

  // Check if the answer is correct
  if (selectedAnswer === "a") {
    document.getElementById("result").innerHTML = "Correct!";
  } else {
    document.getElementById("result").innerHTML = "Incorrect!";
  }

  // Show the result container
  document.getElementById("quiz-container").style.display = "none";
  document.getElementById("result-container").style.display = "block";
}

