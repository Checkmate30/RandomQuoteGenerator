const divForQuote = document.getElementById('quote-div');
const generateBtn = document.getElementById('generate-button');

//api call
function fetchQuote() {
    const api_call = "https://dummyjson.com/quotes/random";

    async function getResult() {
        const response = await fetch(api_call);
        const data = await response.json();
        divForQuote.innerText = data;

    }
    getResult();
}