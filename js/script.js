/**This is my Random Quote code in javascript including multidimensionl, arrays ,functions and conditional statements.
Showing you how i have made a website that shows Random Quotes about money. 
Everytime you click the "show another quote (button)"!! HOPE YOU LIKE IT***/

let Quotes = [
  { 
    Quote: "The lack of money is the root of all evil.",
    Name: "Mark Twain ",
    Citation: "Letter to Henry H. Rogers ",
    Year: 1899,
  },
  {
    Quote: "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    Name: "Ayn Rand ",
    Citation: "Atlas Shrugged ", 
    Year: 1957,
  },
{
  Quote: "A wise man should have money in his head, but not in his heart.",
  Name: "Jonathan Swift ",
  Citation: "Polite Conversation ",
  Year: 1738,
},
 {
  Quote: "Money can't buy happiness, but it can make you awfully comfortable while you're being miserable.",
  Name: "Clare Boothe Luce ",
  Citation: "Quoted in Time magazine ", 
  Year: 1957,
},
{
  Quote: "A bank is a place where they lend you an umbrella in fair weather and ask for it back when it starts to rain.",
 Name: "Robert Frost ",
  Citation: "The Wall Street Journal ", 
  Year: 1931,
},
{
  Quote: "Money often costs too much.",
  Name: "Ralph Waldo Emerson ",
  Citation: "Letter to his daughter, Edith Emerson Forbes ", 
  Year: 1862,
},
{
  Quote: "The safest way to double your money is to fold it over and put it in your pocket.",
  Name: "Kin Hubbard ",
  Citation: "Quoted in Forbes magazine ", 
  Year: 1942,
},
{
  Quote: "Money is a terrible master but an excellent servant.",
  Name: "P.T. Barnum ",
  Citation: "The Art of Money Getting ", 
  Year: 1880,
},

   
];



function getRandomQuote(){
  const randomIndex =
  Math.floor(Math.random() * Quotes.length );
  return Quotes[randomIndex];
}




function printQuote(){
  const randQuote = getRandomQuote()
  let html =`
  <section class="Quotes">
  <P class="Quotes">${randQuote.Quote}</p>
  <p class="source"> `;

  if(randQuote.Name){
    html +=`<span class ="Name">${randQuote.Name}</span>`;
  }
  if(randQuote.Citation){
   html +=`<span class ="Citation">${randQuote.Citation}</span>`;
  }
  if(randQuote.Year){
   html += `<span class="Year">${randQuote.Year}</span>`;
  }
 html += `</p></section>`;
 document.getElementById('quote-box').innerHTML = html;
}




document.getElementById('load-quote').addEventListener("click", printQuote, false);
