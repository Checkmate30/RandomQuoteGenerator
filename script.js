const divForQuote = document.getElementById('quote-div');
const generateBtn = document.getElementById('generate-button');

//api call
function fetchQuote() {
    const api_call = "https://dummyjson.com/quotes/random";

    async function getResult() {
        const response = await fetch(api_call);
        const data = await response.json();
        console.log(data);
        // const author = data.author;
        // const receivedQuote = data.quote;
        divForQuote.innerText = data.quote + ": " + data.author;
    }
    getResult();
}