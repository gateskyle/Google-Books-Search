import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";

export default {

  search: function(query) {
    return axios.get(BASEURL + query);
  },

  save: function (data) {
    console.log(data)
    return axios.post("/api/books", {
      id: data.id,
      title: data.title, 
      authors: data.authors, 
      desc: data.desc,
      pic: data.pic, 
      link: data.link
    })
    .then(function (response) {
      console.log(response)
      console.log(response.authors)
      alert('Book Has Been Saved')
    })
    .catch(function (error) {
      console.log(error);
    })
  },

  getAllBooks: function () {
    return axios.get('/api/books')
  },

  deleteBook: function (id) {
    console.log('id is', id);
    return axios
    .delete(`/api/books/${id}`)
    .then( function (response) {
      console.log('deleted', response)
    })
    .catch(function (err) {
      console.log(err);
    })
  }

};