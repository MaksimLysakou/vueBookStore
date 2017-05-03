<template>
  <div class="contentContainer">
    <h1> {{ authorsHeader }} </h1>
    <p> {{ authorsMsg }} </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      authorsHeader: 'Authors list:',
      authorsMsg: 'TODO',
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