import API from "./api"

let Quote = {
    findAll() {
        return API.fetch('quotes');
    }
}

export default Quote;
