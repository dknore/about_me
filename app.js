'use strict';

var userPoints = 0;

console.log('Greeting');
alert('Welcome to my Guessing Game, a fun way to get to know a bit about me!');

console.log(user);
var user = prompt('What is your name?');
alert('Hi ' + user + ', I am so glad you want to play my game! Please respond to each question with Yes or No');

//Question 1: bio info.

console.log(city)
var city = prompt('Do I love living in Seattle, one of the fastest growing tech. cities in the U.S.?').toLowerCase();

if(city === 'yes' || city === 'y') {
  userPoints++;
} else {
  alert('Guess again, I actually love Seattle, even with all of the rain!')
}

alert('You have ' + userPoints + ' points.')

//Question 2: more bio info.

console.log(solvingPuzzles)
var solvingPuzzles = prompt('Do I enjoy solving puzzles?').toLowerCase();

if(solvingPuzzles === 'yes' || solvingPuzzles === 'y') {
  userPoints++;
} else {
  alert('Oh no, I actually DO love problem-solving and find the process invigorating!')
}

alert('You have ' + userPoints + ' points.')

//Question 3: Education.

console.log(education)
var education = prompt('Am I currently enrolled at Code Fellows and on my way to becoming a skilled Software Developer?').toLowerCase();

if(answer === 'yes' || answer === 'y') {
  userPoints++;
} else {
  alert('Wrong answer, I AM currently enrolled at Code Fellows and excited about pursuing a career in Software Development!')
}

alert('You have ' + userPoints + ' points.')

//Question 4: Job Experience.

console.log(jobExperience)
var jobExperience = prompt('Have I worked as a professional dog walker?').toLowerCase();

if(answer === 'no' || answer === 'n') {
  userPoints++;
} else {
  alert('Wrong, I have worked as a hospital Social Worker!')
}

alert('You have ' + userPoints + ' points.')

//Question 5: Goals.

console.log(goals)
var goals = prompt('Is my goal to be part of a creative team, providing innovative products to the world?').toLowerCase();

if(answer === 'yes' || answer === 'Y') {
  userPoints++;
} else {
  alert('Wrong, that is exactly my goal!!')
}

alert('You have ' + userPoints + ' points.')

//Thanks
alert('That\'s all the questions, THANK YOU for playing my game. I hope you enjoyed it and now know a little bit more about me!')
