<template>
  <div id="app">
    <MyNav class="topNav"></MyNav>
    <section style="display:flex; flex:1;">
      <leftMenu></leftMenu>
      <RightCon></RightCon>
    </section>
  </div>
</template>

<script>
import MyNav from '@/components/myNav'
import LeftMenu from '@/components/leftMenu'
import RightCon from '@/components/rightCon'

export default {
  name: 'App',
  components: {
    MyNav,
    LeftMenu,
    RightCon
  }
}
</script>

<style>
body {
  margin: 0;
}
#app {
  display:flex;
  flex-direction: column;
  height: 100vh;
}
</style>
