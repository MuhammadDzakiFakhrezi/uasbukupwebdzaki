<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue';
</script>

<template>
  <header class="container pt-0">
    <div class="wrapper">
      <div id="test">
      <Header title="Aplikasi Buku" /></div>
      <nav class="navbar">
        <RouterLink id="hom" to="/">Home</RouterLink>
        <RouterLink id="book" to="/buku">Buku</RouterLink>
        <RouterLink id="kate" to="/kategori">Kategori</RouterLink>
        <RouterLink id="memb" to="/anggota">Anggota</RouterLink>
        <RouterLink id="pinj" to="/peminjaman">Peminjaman</RouterLink>
        <RouterLink id="cl" to="/call">Call Center</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>



.navbar{
  background-color: #3B3B3B;
}



#cl{
  color: yellow;
  text-decoration: none;
}

#pinj{
  color: yellow;
  text-decoration: none;
}


#memb{
  color: yellow;
  text-decoration: none;
}
#kate{
  color: yellow;
  text-decoration: none;
}
#book{
  color: yellow;
  text-decoration: none;
}

#hom{
  color: yellow;
  text-decoration: none;
}
#test{
  color: black;
  font-size: 2rem;
  letter-spacing: 15px;
  margin: center;
  margin-left: 26rem;
  border-right: 5px solid;
  width: 60%;
  white-space: nowrap;
  overflow: hidden;
  animation: 
           typing 2s steps(10),
           cursor .4s step-end infinite alternate;

}


  @keyframes cursor {
         50% { border-color: transparent}
    
  }

  @keyframes typing {
          from { width:0}
  }






header {
  line-height: 3.5;
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

nav a {
  display: inline-block;
  padding: 0 1rem;
  
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
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
    margin-right: -1.5rem;
    font-size: 1rem;
    margin-left: 3rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
