<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<template id="apa" class="container pt-0">
  <div class="greetings">
    <h1  class="green">{{ title }}</h1>
    <h3 id="lolo">
      Pilihlah Buku yang
      <h4>
               diinginkan!
      </h4>
    </h3>
  </div>
</template>

<style scoped>
#apa{
  margin: center;
}



#lolo{
  color: black;
  font-size: 2rem;
  letter-spacing: 4px;
  font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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




h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  color: black;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
