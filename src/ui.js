import xss from "xss-filters";

let ui = {
    renderQuotes(quotes) {
        let elements = quotes.map( (quote) => {
            let { message, author } = quote;
            return articleTemplate(message, author.name);
        });

        let target = document.querySelector(".container");
        target.innerHTML = elements.join("");
    },

    renderAuthors(authors) {
        let elements = authors.map( (author) => {
            let { name } = author;
            return authorTemplate(name);
        });

        let target = document.querySelector(".sidebar-content");
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

function authorTemplate(name) {
    let safeName = xss.inHTMLData(name);
    let template = `
        <p class='author-name'>
            ${safeName}
        </p>
        `;

    return template;
}

export default ui;
