<template>
  <div class="nav">
    <router-link to = '/'> {{ homeLabel }} </router-link>
    <router-link to = '/books'> {{ bookLabel }} </router-link>
    <router-link to = '/authors'> {{ authorLabel }} </router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      homeLabel: 'Home',
      bookLabel: 'Books',
      authorLabel: 'Authors',
    }
  }
}
</script>

<style>

    .nav {
        width: 80%;
        margin-left: 10%;
        height: 50px;

        display: flex;
        justify-content: space-around;
        align-items: center;

        background-color: #ced9ed;
        border-color: #bec7d6;
        border-width: 2px;
        border-style: solid;

        border-top: none;
    }

    .nav > a {
        display: flex;
        justify-content: center;
        align-items: center;
    }


</style>