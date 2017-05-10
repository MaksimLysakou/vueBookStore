<template>
  <div class="contentContainer">
    <h1> {{ authorsHeader }} </h1>
    <div class="author" v-for="author in authors">
        <div class="id">
           {{ author._id }}
        </div>
        <div class="email">
            {{ author.email }}
        </div>
        <div class="firstName">
            {{ author.firstName }}
        </div>
        <div class="secondName">
            {{ author.secondName }}
        </div>
        <div class="birthDate">
            {{ author.birthDate }}
        </div>
        <div class="books">
            <li v-for="book in author.book">
                {{ book }}
            </li>
        </div>
        <div>
          <button v-on:click="removeAuthor(author)"> Delete </button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      authorsHeader: 'Authors list:',
      authors: []
    }
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.$http
        .get('http://localhost:3000/api/authors')
        .then(response => {
          if(response.ok === true && response.status === 200) {
            this.$data.authors = response.body.authors;
          }
      })
    },
    removeAuthor(author) {
        this.$http
            .delete(`http://localhost:3000/api/authors/${author['_id']}`)
            .then(response => {
                if(response.status === 200) {
                    this.$data.authors = this.$data.authors.filter(element => element["_id"] !== author['_id']);
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

    .author {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        padding: 10px;
        border-top: 1px solid gray;
    }


</style>