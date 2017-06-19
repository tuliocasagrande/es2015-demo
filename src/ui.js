import xss from "xss-filters";

let ui = {
    renderQuotes(quotes) {
        let elements = quotes.map( (quote) => {
            let { message, author } = quote;
            return articleTemplate(message, author);
        });

        let target = document.querySelector(".container");
        target.innerHTML = elements.join("");
    }
}

function articleTemplate(message, author) {
    let safeMessage = xss.inHTMLData(message);
    let safeAuthor = xss.inHTMLData(author);
    let template = `
        <article class='quote'>
            <h3 class='quote-message'>
                ${safeMessage}
            </h3>
            <p class='quote-author'>
                ${safeAuthor}
            </p>
        </article>`;

    return template;
}

export default ui;
