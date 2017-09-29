'use strict';

var userPoints = 0;

console.log('Greeting');
alert('Welcome to my Guessing Game, a fun way to get to know a bit about me!');

console.log(User name);
var user = prompt('What is your name?');
alert('Hi ' + user + ', I am so glad you want to play my game!');

//Question 1: bio info.

console.log(question1)
var city = prompt('Do I love living in Seattle, one of the fastest growing tech. cities in the U.S.? Please respond Yes or N.').toLowerCase();

console.log(answer);
if(city === 'yes' || city === 'Y') {
  userPoints++;
} else {
  alert('Guess again, I actually love the rain!')
}

alert('You have ' + userPoints + ' points.')

//Question 2: more bio info.

console.log(question2)
var solvingPuzzles = prompt('Do I enjoy solving puzzles?').toLowerCase();

console.log(answer2);
if(solvingPuzzles === 'yes' || solvingPuzzles === 'y') {
  userPoints++;
} else {
  alert('Oh no, I actually do love problem-solving and find the process invigorating!')
}

alert('You have ' + userPoints + ' points.')

//Question 3: Education.

console.log(question3)
var education = prompt('Am I currently enrolled at Code Fellows and on my way to becoming a skilled Software Developer?').toLowerCase();

console.log(answer);
if(answer === 'yes' || answer === 'Y') {
  userPoints++;
} else {
  alert('Wrong answer, I AM currently enrolled at Code Fellows and excited about pursuing a career in Software Development!')
}

alert('You have ' + userPoints + ' points.')

//Question 4: Job Experience.

console.log(question4)
var jobExperience = prompt('Have I worked as a professional dog walker?').toLowerCase();

console.log(answer);
if(answer === 'no' || answer === 'N') {
  userPoints++;
} else {
  alert('Wrong, I have worked as a hospital Social Worker!')
}

alert('You have ' + userPoints + ' points.')

//Question 5: Goals.

console.log(question5)
var goals = prompt('Is my goal to be part of a creative team, providing innovative products to the world?').toLowerCase();

console.log(answer);
if(answer === 'yes' || answer === 'Y') {
  userPoints++;
} else {
  alert('Wrong, that is exactly my goal!!')
}

alert('You have ' + userPoints + ' points.')
