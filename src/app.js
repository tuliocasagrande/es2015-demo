import Quote from "./quote";
import Author from "./author";
import ui from "./ui";

Quote.findAll()
    .then(ui.renderQuotes)
    .catch( (error) => {
        console.log(error);
    });

Author.findAll()
    .then(ui.renderAuthors)
    .catch( (error) => {
        console.log(error);
    });
