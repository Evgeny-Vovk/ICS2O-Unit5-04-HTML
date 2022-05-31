// Created by: Evgeny
// Created on: may 2022
// This file contains the JS functions for index.html

if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-04-HTML/sw.js", {
    scope: "/ICS2O-Unit5-04-HTML/",
  })
}

/**
 * This function calculates which movie rate you can watch.
 */
function calculate() {

  //input
  const age = parseInt(document.getElementById('age').value)
  const sunday = document.getElementById("sunday").checked
  const monday = document.getElementById("monday").checked
  const tuesday = document.getElementById("tuesday").checked
  const wednesday = document.getElementById("wednesday").checked
  const thursday = document.getElementById("thursday").checked
  const friday = document.getElementById("friday").checked
  const saturday = document.getElementById("saturday").checked

  // process
  if ((tuesday == true || thursday == true) && (age > 12 && age < 21)) {
    document.getElementById("answer").innerHTML =
      "You are eligble for student pricing."
  }
  else {
    document.getElementById("answer").innerHTML =
      "You must pay regular price."
  }
}