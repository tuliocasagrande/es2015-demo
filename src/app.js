import Quote from "./quote";
import ui from "./ui";

Quote.findAll()
    .then(ui.renderQuotes)
    .catch( (error) => {
        console.log(error)
    });
