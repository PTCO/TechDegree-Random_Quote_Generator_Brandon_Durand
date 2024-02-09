/************************************************
Treehouse Techdegree: - Brandon Durand
Project 4 - Random Quote Generator
*************************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: 'A nation that continues year after year to spend more money on military defense than on programs of social uplift is approaching spiritual doom.',
    citation: 'brainyquote',
    source: 'Martin Luther King, Jr.',
    year: 1967 ,
    topic: 'Social Injustice' 
  },
  {
    quote: 'You were the chosen one! It was said that you would destroy the Sith, not join them! Bring balance to the force... not leave it in darkness!',
    citation: 'lovetoknow.com',
    source: 'Obi Wan Kenobi - Revenge of the Sith ',
    year: 2005
  },
  {
    quote: 'My journey took me some what further down the rabbit hole than I intended and though I dirtied my fluffy white tail I have emerged, enlightened.',
    citation: 'lovetoknow.com',
    source: 'Sherlock Holmes',
    year: 2009
  },
  {
    quote: 'Now I am Death, the Destroyer of Worlds',
    citation: 'wikipedia',
    source: 'Robert J. Oppenheimer',
    year: 1965,
    topic: 'Reaction to the detonation of the first Atomic Bomb'
  },
  {
    quote: "I believe that unarmed truth and unconditional love will have the final word in reality. This is why right temporarily defeated is stronger than evil triumphant.",
    citation: 'thekingcenter.org',
    source: 'Martin Luther King',
    year: 1964
  },
  {
    quote: 'We shall not flag or fail. We shall go on to the end. We shall fight in France, we shall fight on the seas and oceans, we shall fight with growing confidence and growing strength in the air. We shall defend our island, whatever the cost may be. We shall fight on the beaches, we shall fight on the landing-grounds, we shall fight in the fields and in the streets, we shall fight in the hills. We shall never surrender!',
    citation: 'winstonchurchill.org',
    source: 'Winston Churchill',
    year: 1940
  },
  {
    quote: 'This is the lesson: never give in, never give in, never, never, never, never—in nothing, great or small, large or petty—never give in except to convictions of honour and good sense. Never yield to force; never yield to the apparently overwhelming might of the enemy.”',
    citation: 'winstonchurchill.org',
    source: 'Winston J Churchil',
    year: 1941
  },
]

/*
 - Creates an object with two random numbers, one for quotes & rgba values

 - @returns {Object} Object with two keys or properties, with random number values
 */
const randomNumber = ()=>{
  let randomNumber = {
    rgba: Math.floor(Math.random() * 256),
    quote: Math.floor(Math.random() * quotes.length),
  }
  return randomNumber;
}



/*
 - Generates or outputs a random quote
 
 - @returns {Object} A quote object with properties
*/
const getRandomQuote = ()=>{
  let quote = quotes[randomNumber().quote];
  return quote;
}

/*
 - Prints a random quote in the browser
 */
const printQuote = ()=> {
  let quote = getRandomQuote(); // Store randomly generated quote
  let HTML = `<div id="quote-box" class="quote-box">
      <p class="quote">${quote.quote}</p>
      <p class="source">${quote.source}`;

  if(quote.year && quote.citation){
  /* Quote HTML Markup  */
  HTML += `
      <span class="citation">${quote.citation}</span>
      <span class="year">${quote.year}</span>
      </p>
    </div>
  `;  
  }
  
  if(quote.year && quote.citation && quote.topic){
    HTML += `
        <span class="citation">${quote.citation}</span>
        <span class="year">${quote.year}</span>
        <span class="year">Topic: ${quote.topic}</span>
      </p>
    </div>
  `;  
  }

  
  
  document.querySelector('.container').innerHTML = HTML;  // Displays Quote in Browser
  document.querySelector('body').style.backgroundColor = `rgba(${randomNumber().rgba}, ${randomNumber().rgba}, ${randomNumber().rgba})`// Changes bcakgroud color when a new quote is printed
}

/* 
  -Generates a random quote with a new page background color every "5s" 
*/
setInterval(() => {
  document.querySelector('body').style.backgroundColor = `rgba(${randomNumber().rgba}, ${randomNumber().rgba}, ${randomNumber().rgba})` // Changes bcakgroud color when a new quote is printed
  printQuote() // Prints a new random quote
}, 5000);


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false); // Generates a new random quote and backgroudn color on button click