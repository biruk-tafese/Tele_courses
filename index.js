const TelegramBot = require('node-telegram-bot-api');

const token = '7159428446:AAGIDI9nRWEyMc12MIZX4bF4aIxWhvyhz5Y';


const bot = new TelegramBot(token, { polling: true });

const concepts = [
    { 
      concept: "Closures", 
      definition: "Closures are functions that have access to variables from their outer scope even after the outer function has finished executing.", 
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures"
    },
    { 
      concept: "Promises", 
      definition: "Promises are objects representing the eventual completion or failure of an asynchronous operation.", 
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"
    },
    { 
      concept: "Async/Await", 
      definition: "Async/Await is a modern way of handling asynchronous operations in JavaScript, using the async and await keywords to write asynchronous code that looks synchronous.", 
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function"
    },
    { 
      concept: "Arrow Functions", 
      definition: "Arrow functions are a concise way to write function expressions in JavaScript, using the => syntax.", 
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions"
    },
    { 
      concept: "Prototypes", 
      definition: "Prototypes are the mechanism by which JavaScript objects inherit features from one another.", 
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain"
    },
    { 
      concept: "Destructuring", 
      definition: "Destructuring is a way to extract values from objects and arrays into variables using a syntax that looks similar to the construction of literals.", 
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment"
    },
    { 
      concept: "Modules (import/export)", 
      definition: "Modules allow developers to split code into separate files and import/export functionality between them, promoting modularity and code reuse.", 
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules"
    },
    { 
      concept: "Template Literals", 
      definition: "Template literals are string literals allowing embedded expressions, which can be used for string interpolation and multiline strings.", 
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals"
    },
    { 
      concept: "Array Methods (e.g., map, filter, reduce)", 
      definition: "Array methods such as map, filter, and reduce provide convenient ways to manipulate arrays and perform common operations on their elements.", 
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"
    },
    { 
      concept: "Spread and Rest Operators", 
      definition: "Spread and rest operators (...) provide concise syntax for working with arrays and function arguments, allowing you to spread an array into individual elements or gather function arguments into an array.", 
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax"
    }
    // Add more concepts and definitions here
  ];

  bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    let response = "Welcome to the Telegram Courses Telegram Bot!\n\n";
    response += "Here are the available commands:\n";
    response += "/read - Get a random JavaScript concept to read about\n";
    // Add more commands and descriptions here if needed
    response += "/stop - Leave the bot\n";
    bot.sendMessage(chatId, response);
});


      // Event listener for '/read' command
      bot.onText(/\/read/, (msg) => {
        const chatId = msg.chat.id;
        const randomIndex = Math.floor(Math.random() * concepts.length);
        const randomConcept = concepts[randomIndex];
         if(chatId == '/start') {
            bot.sendMessage(chatId,)
         }
        bot.sendMessage(chatId, `Here's a JavaScript concept for you to read about: ${randomConcept.concept}\n\nDefinition: ${randomConcept.definition} \n\n\n Read More: ${randomConcept.link}`);
      })


