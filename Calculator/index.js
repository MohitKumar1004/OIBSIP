function del() {
  let answer = document.getElementById("result").innerHTML;
  document.getElementById("result").innerHTML = answer.substring(
    0,
    answer.length - 1
  );
}
function clr() {
  document.getElementById("result").innerHTML = "";
}
function display(val) {
  document.getElementById("result").innerHTML += val;
}
function changeSign() {
  let answer = document.getElementById("result").innerHTML;
  document.getElementById("result").innerHTML = "-(" + answer + ")";
}
function evaluateEquation() {
  let history = document.getElementById("result").innerHTML;
  if(history=="")
  {
    document.getElementById("history").innerHTML = "Please type equation";
    return;
  }
  document.getElementById("history").innerHTML = history;
  let answer = eval(document.getElementById("history").innerHTML);
  document.getElementById("result").innerHTML = answer;
}
