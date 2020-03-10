class KayneQuote {
    constructor(quote) {
        this.kanyeWisdom = quote;
    }

    methodOne() {
        return this.kanyeWisdom.toUpperCase();
    }

    methodTwo() {
        return this.kanyeWisdom.toLowerCase();
    }

    methodThree() {
       return this.kanyeWisdom.bold();
    }
}

window.onload = function(){
    document.getElementById("dopeshit").addEventListener("click", function(){
        var kayneAPI = new XMLHttpRequest();
        kayneAPI.addEventListener("load", function(){
            console.log(this.responseText);
            // second event listener

            var Quote = JSON.parse(this.responseText);
            kanyeWisdom = new KayneQuote(Quote.quote);
            document.getElementById("quote1").innerHTML = kanyeWisdom.methodOne();
            document.getElementById("quote2").innerHTML = kanyeWisdom.methodTwo();
            document.getElementById("quote3").innerHTML = kanyeWisdom.methodThree()
        });
        kayneAPI.open("GET", "https://api.kanye.rest");
        kayneAPI.send();

        // API calls here
        // quote = the kanye qyote
        // TODO: add a div for a plain version of the quote.
    });
}


// MAKE AJAX REQUEST TO GET QUOTE
// ON COMPLETE, CREATE A NEW OBJECT FROM THE CLASS
// CALL YOUR THREE METHODS OF YOUR NEW OBJECT

//Don't use tenses, add this folder, changed this aspect etc., ALWAYS START with verb
// Add create API function
// Implement API function
// Create skeleton code
// Add, change, remove, delete