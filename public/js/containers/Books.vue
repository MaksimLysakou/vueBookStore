<template>
  <div class="contentContainer">
    <h1> {{ booksHeader }} </h1>
    <div class="book" v-for="book in books">
        <div class="id">
           {{ book._id }}
        </div>
        <div class="name">
            {{ book.name }}
        </div>
        <div class="publishing">
            {{ book.publishing }}
        </div>
        <div class="ebook">
            {{ book.ebook }}
        </div>
        <div class="year">
            {{ book.year }}
        </div>
        <div class="isbn">
            {{ book.isbn }}
        </div>
        <div class="pages">
            {{ book.pages }}
        </div>
        <div class="authors">
            <li v-for="author in book.author">
                {{ author }}
            </li>
        </div>
        <div>
          <button v-on:click="removeBook(book)"> Delete </button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      booksHeader: 'Books list:',
      books: [],
    }
  },
  mounted() {
      this.fetchData()
  },
  methods: {
    fetchData() {
      this.$http
        .get('http://localhost:3000/api/books')
        .then(response => {
          if(response.ok === true && response.status === 200) {
            this.$data.books = response.body.books;
          }
      })
    },
    removeAuthor(book) {
        this.$http
            .delete(`http://localhost:3000/api/books/${book['_id']}`)
            .then(response => {
                if(response.status === 200) {
                    this.$data.books = this.$data.books.filter(element => element["_id"] !== book['_id']);
                }
            })
    }
  }
}
</script>

<style>

    .contentContainer {
        width: calc(80% - 40px);
        margin-left: 10%;
        height: 400px;

        display: flex;
        justify-content: flex-start;
        flex-direction: column;

        background-color: #ced9ed;
        border-color: #bec7d6;
        border-width: 2px;
        border-style: solid;
        border-top: none;

        padding: 20px;
    }

    .book {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        padding: 10px;
        border-top: 1px solid gray;
    }

</style>