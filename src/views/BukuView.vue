<template>
  <div class="container pt-2">
      <h1 id="dftr">Daftar Buku</h1>
      <a id="afaiy" href="/addbuku" class="btn btn-info text-light my-2">Tambah Buku</a>
      <table class="table">
          <thead>
              <tr>
              <th id="pinjj" scope="col">ID</th>
              <th id="pinjj" scope="col">Judul</th>
              <th id="pinjj" scope="col">Penerbit</th>
              <th id="pinjj" scope="col">Pengarang</th>
              <th id="pinjj" scope="col">Tahun</th>
              <th id="pinjj" scope="col">Aksi</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="b in buku" :key="b.id">
                  <td id="pinaa">{{ b.id }}</td>
                  <td id="pinaa">{{ b.judul }}</td>
                  <td id="pinaa">{{ b.penerbit }}</td>
                  <td id="pinaa">{{ b.pengarang }}</td>
                  <td id="pinaa">{{ b.tahun }}</td>
                  <td id="pinaa" class="d-flex justify-content-start">
                      <a :href="'/buku/' + b.kode" class="btn btn-warning me-2">Lihat</a>
                      <a class="btn btn-danger" @click="hapusBuku(b.kode)">Delete</a>
                  </td>
              </tr>
          </tbody>
      </table>
  </div>
</template>

<script>
import axios from 'axios';
import api from '../setting/api'

export default {
data() {
  return {
    buku: [],
    errors: []
  }
},
created() {
  this.getData()
},
methods : {
  getData(){
    axios.get( api + 'selectBuku.php')
    .then(response => {
      // JSON responses are automatically parsed.
      this.buku = response.data
      console.log(this.buku)
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  hapusBuku(kode) {
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
              url: api + 'deleteBukubyKode.php',
              data: formData,
              config: { headers: {'Content-Type': 'multipart/form-data' }}
          })
      .then(response => {
          console.log('Buku berhasil dihapus:', response.data);
          // Refresh daftar buku setelah penghapusan
          this.getData()
      })
      .catch(error => {
          console.error('Gagal menghapus buku:', error);
      });
  }
}
}
</script>

<style>



#pinjj{
  background-color: #FFDE59;
  font-family: Arial, Helvetica, sans-serif;
  
}

#pinaa{
  background-color: #3B3B3B;
  color: white;
}


#afaiy{
  margin-left: 34rem;
}


#dftr{

margin-left: 31rem;
margin-top: 2rem;
margin-bottom: 2rem;
}
</style>
