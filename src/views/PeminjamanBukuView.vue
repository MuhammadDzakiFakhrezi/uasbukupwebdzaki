<template>
  <div class="container pt-2">
      <h1 id="dftrcol">Daftar Peminjaman</h1>
      <a id="afaac" href="/addpeminjaman" class="btn btn-info text-light my-2">Tambah Peminjaman</a>
      <table class="table">
          <thead>
              <tr>
              <th id="pinjammaja" scope="col">ID</th>
              <th id="pinjammaja" scope="col">Judul</th>
              <th id="pinjammaja" scope="col">Anggota</th>
              <th id="pinjammaja" scope="col">Tanggal Pinjam</th>
              <th id="pinjammaja" scope="col">Tanggal Kembali</th>
              <th id="pinjammaja" scope="col">Status</th>
              <th id="pinjammaja" scope="col">Aksi</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="p in peminjaman" :key="p.id">
                  <td id="pinjaa">{{ p.id }}</td>
                  <td id="pinjaa">{{ p.judul_buku }}</td>
                  <td id="pinjaa">{{ p.nama_anggota }}</td>
                  <td id="pinjaa">{{ p.tanggal_peminjaman }}</td>
                  <td id="pinjaa">{{ p.tanggal_pengembalian }}</td>
                  <td id="pinjaa">{{ p.status_peminjaman }}</td>
                  <td id="pinjaa" class="d-flex justify-content-start">
                      <a :href="'/peminjaman/' + p.id" class="btn btn-warning me-2">Lihat</a>
                      <a class="btn btn-danger" @click="hapusPeminjaman(p.id)">Delete</a>
                  </td>
              </tr>
          </tbody>
      </table>
  </div>
</template>

<style>







#pinjammaja{
  background-color: #FFDE59;
  font-family: Arial, Helvetica, sans-serif;
  
}

#pinjaa{
  background-color: #3B3B3B;
  color: white;
}


#afaac{
  margin-left: 31rem;
}


#dftrcol{
  margin-left: 25rem;
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
    peminjaman: [],
    errors: []
  }
},
created() {
  this.getData()
},
methods : {
  getData(){
    axios.get( api + 'selectPeminjaman.php')
    .then(response => {
      // JSON responses are automatically parsed.
      this.peminjaman = response.data
      console.log(this.peminjaman)
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  hapusPeminjaman(id) {
    // Menghapus buku berdasarkan kode
      console.log(id)
      let formData = new FormData();
      formData.append('id', id)
      var bk = {};
      formData.forEach(function(value, key){
          bk[key] = value;
      });
      axios({
              method: 'post',
              url: api + 'deletePeminjamanbyId.php',
              data: formData,
              config: { headers: {'Content-Type': 'multipart/form-data' }}
          })
      .then(response => {
          console.log('Peminjaman berhasil dihapus:', response.data);
          // Refresh daftar buku setelah penghapusan
          this.getData()
      })
      .catch(error => {
          console.error('Peminjaman menghapus buku:', error);
      });
  }
}
}
</script>
