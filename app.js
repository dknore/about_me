'use strict';

var userPoints = 0;

console.log('Greeting');
alert('Welcome to my Guessing Game, a fun way to get to know a bit about me!');

console.log('The users name is: ' + user);
var user = prompt('What is your name?');
alert('Hello, ' + user + ', I\'m so glad you want to play my game!');

//Question 1: bio info.

function question1() {
  var answer1 = prompt('Do I love living in Seattle? Please respond with Yes or No.').toLowerCase();
  if(answer1 === 'yes' || answer1 === 'y') {
    alert('Fantastic, you\'re off to a great start!');
    userPoints++;
  }else {
    alert('Guess again, I love Seattle, even with all the rain!');
  }
  alert('You have ' + userPoints + ' points.');
}
question1();

// Question 2: more bio info.

function question2() {
  console.log('Question 2 answer is: ', answer2);
  var answer2 = prompt('Do I enjoy solving puzzles? Please respond with Yes or No').toLowerCase();

  if(answer2 === 'yes' || answer2 === 'y') {
    alert('Excellent!');
    userPoints++;
  } else {
    alert('Ruh roh, I actually think problem-solving is super fun!');
  }
  alert('You have ' + userPoints + ' points.');
}
question2();

// Question 3: Education.

function question3() {
  console.log('Question 3 answer is: ' + answer3);
  var answer3 = prompt('Am I currently enrolled at Code Fellows and on my way to becoming a skilled Software Developer? Please respond with Yes or No').toLowerCase();

  if(answer3 === 'yes' || answer3 === 'y') {
    alert('Right on, you\'ve got this!');
    userPoints++;
  } else {
    alert('Wrong answer, I AM currently enrolled at Code Fellows and excited about pursuing a career in Software     Development!');
  }
  alert('You have ' + userPoints + ' points.');
}
question3();

// Question 4: Job Experience.

function question4() {
  console.log('Question 4 answer is: ', answer4);
  var answer4 = prompt('Have I worked as a professional dog walker? Please respond with Yes or No').toLowerCase();

  if(answer4 === 'no' || answer4 === 'n') {
    alert('Way to go, you\'re amazing!');
    userPoints++;
  } else {
    alert('Nope, I have actually had experience working as a hospital Social Worker!');
  }
  alert('You have ' + userPoints + ' points.');
}
question4();

// Question 5: Goals.

function question5() {
  console.log('Question 5 answer is: ' + answer5);
  var answer5 = prompt('Is my goal to be part of a creative team, providing innovative products to the world? Please respond with Yes or No').toLowerCase();

  if(answer5 === 'yes' || answer5 === 'y') {
    alert('YES! That one was too easy, though... ;)');
    userPoints++;
  } else {
    alert('Wrong, that is exactly my goal!!');
  }

  alert('You have ' + userPoints + ' points.');
}
question5();

//Question 6: Prompt user to guess a number, AND indicates 'too high/low'.  User has FOUR tries.

function question6() {
  var answer6 = prompt('Let\'s shake it up a bit.. How many movies do I own? Guess any number.  You will have 4  guesses.');
  var moviesIOwn = 104;
  var question6Guesses = 4;
  console.log('Question 6 answer is: ', answer6);

  for(var i = 0; i < question6Guesses; i++) {
    answer6 = parseInt(answer6);

    if(answer6 === moviesIOwn) {
      alert('Way to go, you are crushing this!');
      userPoints++;
      alert('You have ' + userPoints + ' points.');
      break;
    } else if(answer6 === NaN || answer6 === null || answer6 === '') {
      answer6 = prompt('Oops, please enter a number.');
    } else if(answer6 < moviesIOwn && i < (question6Guesses - 1)) {
      answer6 = prompt('It may be hard to believe, but I own even MORE than that!');
    } else if(answer6 > moviesIOwn && i < (question6Guesses - 1)) {
      answer6 = prompt('Oops, too high! Try again.');
    } else {
      alert('Sorry, you have no more guesses left.');
    }
  }
}
question6();

//Question 7: Prompt user to guess answer from an array of answers. User has SIX tries, AND upon using up tries or getting correct answer, display msg of all possilbe answers.

function question7() {
  var answer7 = prompt('Can you guess 1 of the items on my Bucket List? Let\'s see if you can guess one in 6 guesses.').toLowerCase();
  console.log('Question 7 answer is: ' + answer7);
  var bucketList = ['running a marathon', 'living abroad for at least 1 year', 'traveling to most of the continents', 'live downtown for a season'];
  var flag = false;
  var question7Guesses = 6;

  while (flag === false && question7Guesses > 0) {

    for(var i = 0; i < bucketList.length; i++) {
      if(answer7 === bucketList[i]) {
        flag = true;
      }
    }

    if (flag === true) {
      alert('Great Job!');
      userPoints++;
    } else {
      answer7 = prompt('Oh no, guess again!');
      question7Guesses--;
    }
  }
  //List items in array (Bucket List)
  alert('Actually, these are some of the items in my Bucket List: ' + bucketList);
  alert('You have ' + userPoints + ' points.');
}
question7();

//Thanks
alert('That\'s all the questions, thank you for playing my game. I hope you enjoyed it and now know a little bit more about me!');
