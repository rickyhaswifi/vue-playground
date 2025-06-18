<script setup lang="ts">
import { RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import LinkRouter from './components/LinkRouter.vue'
</script>

<template>
  <header class="">
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="Ricardo B" />

      <nav>
        <LinkRouter link="/" title="Home REF" classStyle="nav-item" />
        <LinkRouter link="/about" title="About local storage" classStyle="nav-item" />
        <LinkRouter link="/contact" title="Contact" classStyle="nav-item" />
        <LinkRouter link="/events" title="Event JSON" classStyle="nav-item" />
        <LinkRouter link="/modal" title="Modal" classStyle="nav-item" />
        <LinkRouter link="/ticket4" title="Ticket4 API" classStyle="nav-item" />
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
body {
  display: relative;
}
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav .nav-item {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav .nav-item:first-of-type {
  border: 0;
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

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
