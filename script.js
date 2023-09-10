const divForQuote = document.getElementById('quote-div');
const generateBtn = document.getElementById('generate-button');

//api call
function fetchQuote() {
    const api_call = "";

    async function getResult() {
        const response = await fetch(api_call);
        const data = await response.json();
        const receivedQuote = "";

    }
}