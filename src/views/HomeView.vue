<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <div id="container">
    <h1>Aplikasi Peminjaman Buku</h1>
    <h2>   Selamat Datang :)</h2>
  </div>
</template>

<style>




#container{
  background-color: #FFDE59;
  color: black;
  font-size: 2rem;
  letter-spacing: 8px;
  font-family: monospace;
  border-right: 5px solid;
  width: 60%;
  white-space: nowrap;
  overflow: hidden;
  animation: 
           typing 2s steps(8),
           cursor .4s step-end infinite alternate;

}


  @keyframes cursor {
         50% { border-color: transparent}
    
  }

  @keyframes typing {
          from { width:0}
  }

  #container{
    padding-top: 10%;
    margin: center;
  }


</style>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      posts: [],
      errors: []
    }
  },
  created() {

    axios.get('https://icemuls.my.id/uaspweb/selectBuku.php')
    .then(response => {
      // JSON responses are automatically parsed.
      this.posts = response.data
      console.log(this.posts)
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>
