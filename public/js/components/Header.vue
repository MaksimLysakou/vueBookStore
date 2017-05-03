<template>
  <div class="header">
    <h1> {{ headerLabel }} </h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      headerLabel: 'Vue bookstore!'
    }
  }
}
</script>

<style>

    .header {
        width: 80%;
        margin-left: 10%;
        height: 150px;

        display: flex;
        justify-content: center;
        align-items: center;

        background-color: #d8d8d8;
        border-color: #bec7d6;
        border-width: 2px;
        border-style: solid;
    }

</style>