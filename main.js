// QUIZ
console.log("hi");
// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // variables
  let ans1 = document.getElementById("ans1").value;
  let ans2 = document.getElementById("ans2").value;
  let ans3 = document.getElementById("ans3").value;
  let ans4 = document.getElementById("ans4").value;

  // Quiz score

  let score = 0;
  let blank = 0;

  //feedback
  if (ans1 === "22" || ans1 === "twenty two") {
    document.getElementById("answer").innerHTML = "correct";
    score = score + 1;
  } else if (ans1.lenght === 0) {
    document.getElementById("answer").innerHTML = "incomplete";
    blank = blank + 1;
  } else {
    document.getElementById("answer").innerHTML = "incorrect";
  }
  if (ans2 === "1863" || ans2 === "eighteen sixty three") {
    document.getElementById("answer1").innerHTML = "correct";
    score = score + 1;
  } else if (ans2.length === 0) {
    document.getElementById("answer1").innerHTML = "incomplete";
    blank = blank + 1;
  } else {
    document.getElementById("answer1").innerHTML = "incorrect";
  }
  if (ans3 === "goalie") {
    document.getElementById("answer2").innerHTML = "correct";
    score = score + 1;
  } else if (ans3.length === 0) {
    document.getElementById("answer2").innerHTML = "incomplete";
    blank = blank + 1;
  } else {
    document.getElementById("answer2").innerHTML = "incorrect";
  }
  if (ans4 === "3-4") {
    document.getElementById("answer3").innerHTML = "correct";
    score = score + 1;
  } else if (ans4.length === 0) {
    document.getElementById("answer3").innerHTML = "incomplete";
    blank = blank + 1;
  } else {
    document.getElementById("answer3").innerHTML = "incorrect";
  }

  // percentage
  let percentage = (score / 4) * 100;

  document.getElementById("percentage").innerHTML = `(${percentage})%`;

  // marks

  if (score === 0) {
    document.getElementById("encouragement").innerHTML = "need more practice";
    document.getElementById("score").innerHTML = "0/4";
  } else if (score === 1) {
    document.getElementById("encouragement").innerHTML = "try harder";
    document.getElementById("score").innerHTML = "1/4";
  } else if (score === 2) {
    document.getElementById("encouragement").innerHTML = "half way";
    document.getElementById("score").innerHTML = "2/4";
  } else if (score === 3) {
    document.getElementById("encouragement").innerHTML = "almost there";
    document.getElementById("score").innerHTML = "3/4";
  } else if (score === 4) {
    document.getElementById("encouragement").innerHTML = "nice job";
    document.getElementById("score").innerHTML = "4/4";
  }

  // if incomplete

  if (blank === 1 || blank === 2 || blank === 3 || blank === 4) {
    document.getElementById("encouragement").innerHTML = "please complete quiz";
    document.getElementById("percentage").innerHTML = "?";
    document.getElementById("score").innerHTML = "?";
  }
}
