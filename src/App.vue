<template>
  <q-layout view="hHh LpR fFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title>
          Coachassistent
        </q-toolbar-title>
      </q-toolbar>

      <!-- <q-tabs align="left">
        <q-route-tab to="/page1" label="Page One" />
        <q-route-tab to="/page2" label="Page Two" />
        <q-route-tab to="/page3" label="Page Three" />
      </q-tabs> -->
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" :mini="mini" @mouseover="mini = false"
        @mouseout="mini = true" mini-to-overlay bordered>
      <drawer-content></drawer-content>
    </q-drawer>

    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import DrawerContent from './components/DrawerContent.vue';

export default defineComponent({
  components: { DrawerContent },
  setup() {
    const leftDrawerOpen = ref(false);
    const mini = ref(true)

    return {
      leftDrawerOpen,
      mini,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      }
    }
  },
})
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
