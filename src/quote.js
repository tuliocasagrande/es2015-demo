import API from "./api"

let Quote = {
    findAll() {
        return API.fetch('quotes?_expand=author');
    }
}

export default Quote;
