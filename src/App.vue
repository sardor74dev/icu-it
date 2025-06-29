<script>
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'
import { isAuthenticated, authStatus } from './utils/auth'

export default {
  components: {
    Header,
    Sidebar
  },
  computed: {
    isAuthenticated(){
      return isAuthenticated()
    }
  },
  watch: {
    'authStatus.value'(){
      this.$forceUpdate()
    }
  },
  created(){
    this.authStatus = authStatus
  }
}
</script>

<template>
  <Header v-if="isAuthenticated" />
  <main>
    <Sidebar v-if="isAuthenticated" />
    <RouterView />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

main {
  margin-top: 70.5px;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
