<template>
  <div class="contentContainer">
    <h1> {{ booksHeader }} </h1>
    <p> {{ booksMsg }} </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      booksHeader: 'Books list:',
      booksMsg: 'TODO',
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

</style>