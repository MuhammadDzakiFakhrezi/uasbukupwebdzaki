<template>
  <div class="container pt-2">
      <h1 id="dftrlh">Daftar Kategori</h1>
      <a id="afaya" href="/addkategori" class="btn btn-info text-light my-2">Tambah Kategori</a>
      <table class="table">
          <thead>
              <tr>
              <th id="popo" scope="col">ID</th>
              <th id="popo" scope="col">Kode</th>
              <th id="popo" scope="col">Kategori</th>
              <th id="popo" scope="col">Aksi</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="k in kategori" :key="k.id">
                  <td id="poplj">{{ k.id }}</td>
                  <td id="poplj">{{ k.kode }}</td>
                  <td id="poplj">{{ k.kategori }}</td>
                  <td id="poplj" class="d-flex justify-content-start">
                      <a :href="'/kategori/' + k.kode" class="btn btn-warning me-2">Lihat</a>
                      <a class="btn btn-danger" @click="hapusKategori(k.kode)">Delete</a>
                  </td>
              </tr>
          </tbody>
      </table>
  </div>
</template>

<style>



#popo{
  background-color: #FFDE59;
  font-family: Arial, Helvetica, sans-serif;
  
}

#poplj{
  background-color: #3B3B3B;
  color: white;
}


#afaya{
  margin-left: 31rem;
}

#dftrlh{
  
  margin-left: 27rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
}
</style>

<script>
import axios from 'axios';
import api from '../setting/api'

export default {
data() {
  return {
    kategori: [],
    errors: []
  }
},
created() {
  this.getData()
},
methods : {
  getData(){
    axios.get( api + 'selectKategori.php')
    .then(response => {
      // JSON responses are automatically parsed.
      this.kategori = response.data
      console.log(this.kategori)
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  hapusKategori(kode) {
    // Menghapus buku berdasarkan kode
      console.log(kode)
      let formData = new FormData();
      formData.append('kode', kode)
      var bk = {};
      formData.forEach(function(value, key){
          bk[key] = value;
      });
      axios({
              method: 'post',
              url: api + 'deleteKategoribyKode.php',
              data: formData,
              config: { headers: {'Content-Type': 'multipart/form-data' }}
          })
      .then(response => {
          console.log('Kategori berhasil dihapus:', response.data);
          // Refresh daftar buku setelah penghapusan
          this.getData();
      })
      .catch(error => {
          console.error('Gagal menghapus kategori:', error);
      });
  }
}
}
</script>
