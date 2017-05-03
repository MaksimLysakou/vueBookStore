<template>
  <div id="root">
    <headerComponent></headerComponent>
    <navigationComponent></navigationComponent>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderComponent from '../components/Header.vue'
import NavigationComponent from '../components/Navigation.vue'

export default {
  components: {
    HeaderComponent,
    NavigationComponent
  }
}
</script>
