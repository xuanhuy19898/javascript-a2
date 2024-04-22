//XUAN HUY PHAM - 000899551 - Assignment 2
//JSC file: a2javascript.js 
//date: 2/25/2024

//Q1 - group 1 - choice 1
function group1_choice1() {
    //get the value from input
    const input = document.getElementById("q1_input").value;
    //get the output text box element
    const output = document.getElementById("q1_output");
    var message;
    //check if the input is a valid number
    if (!isNaN(input)) {
      //if input is "0" or within the range of 13 to 17 inclusive
      if (input === "0" || (input >= 13 && input<=17)) {
        message = "In range"; 
      } else {
        //if input is outside the range
        message = "Out of range";
      }
    } else {
      //if the var is not a number
      message = "Not a number"; 
    }
    // set this result message to the output text box
    output.value = message; 
  }



//Q2- group 1 - choice 2
  function group1_choice2() {
    //retrieve the value entered in the input textt box and parse it into a float number
    const input = parseFloat(document.getElementById("q2_input").value);
    //get the output text box element
    const output = document.getElementById("q2_output");
    //check if input is not a number or if it's negative
    if (isNaN(input) || input < 0) {
      //if input is not a number or negative, the condition will evaluate to true, and print the statement below
      output.value = "Non-numeric or negative input";
      return;
    }
    //calculate the number of years, months, and days
    //because a year is approximately = 362.25 days, the year count is derived by dividing the input by 365.25 and round down
    const years = Math.floor(input/365.25); 
    //to calculate the remainder of days after calculating the years, divide the remainder by 30.44 
    const months = Math.floor((input % 365.25)/30.44);
    //calculate the remainding days
    const days = input % 30.44;

    //display the result statement for output
    output.value = years + " years, " + months + " months, and " + days.toFixed(2) + " days";
}



//Q3- group 2 - choice 1
function group2_choice1() {
  //retrive input value and convert it to lowercase, incase user's input is uppercase
  const input = document.getElementById("q3_input").value.toLowerCase();
  //output value used to display in the output box
  const output = document.getElementById("q3_output");
  //array of vowels
  const vowels = ["a","e","o","i","u"];
  //if input includes one of the vowels of the array of vowels
  if (vowels.includes(input)) {
    output.value = "A Vowel";
  } else if (input == "y") {//check if the input is "y"
    output.value = "Sometimes";
  } else {//if input is neither a vowel nor "y"
    output.value = "Not a vowel";
  }
}
  

//Q4 - group 2 - choice 3
function group2_choice3() {
  //retrieve value from input converrt it to a float value
  const input = parseFloat(document.getElementById("q4_input").value);
  const output = document.getElementById("q4_output");
  //check if input is a positive integer
  if (Number.isInteger(input) && input>0) {
    //set factorial = 1, that means it will start from 1
    let factorial = 1;
    //it will keep increasing from 1 and multiplying until i = input
    //multiply factorial value by i and that value will be updated
    for (let i = 1; i <= input; i++) { 
      factorial *= i; 
    }
    //set the new factorial value as output
    output.value = factorial; 
  } else {
    output.value = "Invalid input: Please enter a positive integer";
  }
}



//Q5 - group 3 choice 1
function group3_choice1() {
  const input = document.getElementById("q5_input").value;
  var value = 0;
  //check if the input is a binary number with a length between 10 and 20 digits and contains only 0's and 1's
  if (input.length >= 10 && input.length <= 20 && /^[01]+$/.test(input)) { 
    for (var i = 0; i < input.length; i++) {
      //if the current character is "1", calculate the corresponding power of 2 and add it to the value
      if (input.charAt(i) === "1") {
        value += Math.pow(2, i); 
      }
    }
  } else {
    //otherwisse (if not "1"), value = 0
    value = 0; 
  }
  document.getElementById("q5_output").value = value;
}
