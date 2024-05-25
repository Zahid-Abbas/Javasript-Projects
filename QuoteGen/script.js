// const api_url = 'https://api.quotable.io/random';

const quote= document.getElementById("quote");
const author = document.getElementById("author");

async function getQuote() {
    const res = await fetch('https://api.quotable.io/random');
    const data = await res.json();
    console.log(data);
    quote.innerHTML=data.content;
    author.innerHTML = data.author
}

getQuote();