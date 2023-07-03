<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div id="lklk" class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
     Pilihlah Buku yang diinginkan!
    </h3>
  </div>
</template>

<style scoped>



#lklk{
  margin: center;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
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
