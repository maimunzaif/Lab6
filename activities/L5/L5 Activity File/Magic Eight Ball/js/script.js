// Create an array of possible answers

const magic8BallResponses = [
    "It is certain",
    "Reply hazy, try again",
    "Don’t count on it",
    "It is decidedly so",
    "Ask again later",
    "My reply is no",
    "Without a doubt",
    "Better not tell you now",
    "My sources say no",
    "Yes definitely",
    "Cannot predict now",
    "Outlook not so good",
    "You may rely on it",
    "Concentrate and ask again",
    "Very doubtful",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes"
  ];
  
  
// Create a function to fetch the question the user has asked 	
// Our function should also check from an empty value

  
// Select a random answer from your array 

function askQuestion() {
    const randomIndex = Math.floor(Math.random() * magic8BallResponses.length);
    const quoteOfTheDay = magic8BallResponses[randomIndex];
    console.log("Quote of the Day:", quoteOfTheDay);
    alert(quoteOfTheDay); 
}

	
// Display the question and answer back to the user
// And, log the question and answer to the console
