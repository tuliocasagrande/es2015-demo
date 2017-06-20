import API from "./api"

let Authors = {
  findAll() {
    return API.fetch('authors');
  }
}

export default Authors;
