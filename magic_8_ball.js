let userName = 'Jude';

userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

const userQuestion = 'Will I ever get married?';

console.log(`${userName} asked: ${userQuestion}`); 

const randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';
 
switch (randomNumber) {
  case 0:
    eightBall = 'But of course!';
    break;
  case 1:
    eightBall = 'Maybe when you\'re 70';
    break;
  case 2:
    eightBall = 'You already tried that';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Outlook not so good';
    break;
  case 5:
    eightBall = 'My sources say "RUN"';
    break;
  case 6:
    eightBall = 'Signs point to nope';
    break;
  case 7:
    eightBall = 'Maybe someday, keep trying';
    break;
  case 8:
    eightBall = 'Bad idea';
    break;
  default:
    console.log('Invalid item');
    break;
}

console.log(`The eight ball replied: ${eightBall}`);


