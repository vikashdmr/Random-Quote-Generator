let btnE1 = document.getElementById("btn");
const quoteE1= document.getElementById("quote");
const authorE1= document.getElementById("author");


const apiurl= "http://api.quotable.io/random";

async function getquote(){
    try {
        quoteE1.innerText="loding....";
        authorE1.innerText= "loding....";
        const response = await fetch(apiurl);
        const data = await response.json();
        quoteE1.innerText= data.content;
        authorE1.innerText= " ~ " +data.author;
    
        console.log(data);
    } catch (error) {
        quoteE1.innerText=" an Error happend, try again later";
        authorE1.innerText=" an Error happend";

        console.log("Enternet disconected");
    }
   
}

btnE1.addEventListener("click",getquote);