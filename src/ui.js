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
    let template = `
        <article class='quote'>
            <h3 class='quote-message'>
                ${message}
            </h3>
            <p class='quote-author'>
                ${author}
            </p>
        </article>`;

    return template;
}

export default ui;
