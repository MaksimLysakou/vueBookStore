<template>
  <div class="contentContainer">
    <h1> {{ welcomeMsgHeader }} </h1>
    <p> {{ welcomeMsg }} </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      welcomeMsgHeader: 'Welcome to the bookstore!',
      welcomeMsg: 'Welcome to the bookstore! Lorem ipsum dolor sit amet i tak dalee...',
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