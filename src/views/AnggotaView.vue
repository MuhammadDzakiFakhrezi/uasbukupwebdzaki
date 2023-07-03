<template>
  <div class="container pt-2">
      <h1 id="dftrr">Daftar Anggota</h1>
      <a id="afya" href="/addanggota" class="btn btn-info text-light my-2">Tambah Anggota</a>
      <table class="table">
          <thead>
              <tr>
              <th id="popou" scope="col">ID</th>
              <th id="popou" scope="col">Nomor</th>
              <th id="popou" scope="col">Nama</th>
              <th id="popou" scope="col">Jenis Kelamin</th>
              <th id="popou" scope="col">Alamat</th>
              <th id="popou" scope="col">No Hp</th>
              <th id="popou" scope="col">Tanggal Terdaftar</th>
              <th id="popou" scope="col">Aksi</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="a in anggota" :key="a.id">
                  <td id="gajuga">{{ a.id }}</td>
                  <td id="gajuga">{{ a.nomor }}</td>
                  <td id="gajuga">{{ a.nama }}</td>
                  <td id="gajuga">{{ a.jenis_kelamin }}</td>
                  <td id="gajuga">{{ a.alamat }}</td>
                  <td id="gajuga">{{ a.no_hp }}</td>
                  <td id="gajuga">{{ a.tanggal_terdaftar }}</td>
                  <td id="gajuga" class="d-flex justify-content-start">
                      <a :href="'/anggota/' + a.nomor" class="btn btn-warning me-2">Lihat</a>
                      <a class="btn btn-danger" @click="hapusanggota(a.nomor)">Delete</a>
                  </td>
              </tr>
          </tbody>
      </table>
  </div>
</template>


<style>

#popou{
  background-color: #FFDE59;
  font-family: Arial, Helvetica, sans-serif;
  
}

#gajuga{
  background-color: #3B3B3B;
  color: white;
}


#afya{
  margin-left: 31rem;
}

#dftrr{
  
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
    anggota: [],
    errors: []
  }
},
created() {
  this.getData()
},
methods : {
  getData(){
    axios.get( api + 'selectAnggota.php')
    .then(response => {
      // JSON responses are automatically parsed.
      this.anggota = [...response.data]
      console.log(this.anggota)
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  hapusanggota(nomor) {
    // Menghapus anggota berdasarkan kode
      console.log(nomor)
      let formData = new FormData();
      formData.append('nomor', nomor)
      var bk = {};
      formData.forEach(function(value, key){
          bk[key] = value;
      });
      axios({
              method: 'post',
              url: api + 'deleteAnggotabyNomor.php',
              data: formData,
              config: { headers: {'Content-Type': 'multipart/form-data' }}
          })
      .then(response => {
          console.log('anggota berhasil dihapus:', response.data);
          // Refresh daftar anggota setelah penghapusan
          this.getData()
      })
      .catch(error => {
          console.error('Gagal menghapus anggota:', error);
      });
  }
}
}
</script>
